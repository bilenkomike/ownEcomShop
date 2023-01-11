from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .serializers import SubscriptionSerializer
from .models import Subscription
from product.models import ProductCategory
from blogcategories.models import BlogCategory
from django.contrib.auth.models import User

from django.core.mail import EmailMessage
from django.template.loader import render_to_string

class SubscriptionListView(ListAPIView):
    
    serializer_class = SubscriptionSerializer
    model = Subscription
    permission_classes = [IsAuthenticated]
    
    
    def get_queryset(self):
        return Subscription.objects

    def list(self,request, *args, **kwargs):
        subscriptions = self.get_queryset().filter(user=self.request.user)
        serializer = SubscriptionSerializer(subscriptions, many=True)
        return Response(serializer.data)




class CreateSubscription(CreateAPIView):
    def create(self, request, *args, **kwargs):
        print(self.request.data)
        data = self.request.data
        blog_category = data.get('blog_category', None)
        product_category = data.get('product_category', None)
        user = User.objects.get(first_name=data['fullname'], email=data['email'])
        if product_category:
            product_category = ProductCategory.objects.get(id=int(product_category))
        if blog_category:
            blog_category = BlogCategory.objects.get(id=int(blog_category))
        subscription = Subscription.objects.create(user=user,fullname=data['fullname'], email=data['email'], blog_category=blog_category, product_category=product_category)
        serialier = SubscriptionSerializer(subscription,many=False)
        
        
        # template = render_to_string('emails/reply_template.html', {'name': 'Mike'})
        # email = EmailMessage(
        #                 'Reply to some message',
        #                 # template,
        #                 'createxmike@gmail.com',
        #                 [data['reply_email']],
        #                 # ['bcc@example.com'],
        #                 # reply_to=['another@example.com'],
        #                 headers={'Message-ID': 'reply'},
                
        #                 # 'Property listing inquery',
        #                 # 'There has been an inquery for . Sign into the admin panel for more info',
        #                 # 'createxmike@gmail.com',
        #                 # [data['reply_email']],
        #                 # fail_silently=False
        #     )
        # email.fail_silently = False
        # email.content_subtype = 'html'
        # email.send()
            
        return Response(serialier.data)


class UpdateSubscriptionView(UpdateAPIView):
    model = Subscription
    lookup_field = 'pk'
    serializer_class = SubscriptionSerializer
    queryset = Subscription.objects.all()
    
    
    
class DeleteSubscriptionView(DestroyAPIView):
    model = Subscription
    lookup_field = 'pk'
    serializer_class = SubscriptionSerializer
    queryset = Subscription.objects.all()
    