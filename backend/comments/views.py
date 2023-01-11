from rest_framework import generics
from rest_framework.response import Response
from .models import Comment
from .serializers import CommentSerializer
from post.models import Post
from django.contrib.auth.models import User

from django.core.mail import send_mail,EmailMessage
from django.conf import settings
from django. template. loader import render_to_string


class CreateCommentView(generics.CreateAPIView):
    model = Comment
    serializer_class= CommentSerializer
    queryset = Comment.objects.all()
    
    def create(self,request):
        data = request.data
        reply = data.get('reply', None)
        post = Post.objects.get(id=int(data['post']))
        
        comment = Comment.objects.create(post =post, email=data['email'], fullname=data['fullname'], comment=data['comment'])
        user = User.objects.get(email = data['email'])
        if user:
            comment.user = user
            
            
        if reply != None:
            comment.reply = True
            comment.reply_email = data['reply_email']
            comment.reply_fullname = data['reply_fullname']
            template = render_to_string('emails/reply_template.html', {'name': 'Mike'})
            email = EmailMessage(
                        'Reply to some message',
                        template,
                        'createxmike@gmail.com',
                        [data['reply_email']],
                        # ['bcc@example.com'],
                        # reply_to=['another@example.com'],
                        headers={'Message-ID': 'reply'},
                
                        # 'Property listing inquery',
                        # 'There has been an inquery for . Sign into the admin panel for more info',
                        # 'createxmike@gmail.com',
                        # [data['reply_email']],
                        # fail_silently=False
            )
            email.fail_silently = False
            email.content_subtype = 'html'
            email.send()
        
        comment.save()
        
        serializer = CommentSerializer(comment, many=False)
            
        return Response(serializer.data)