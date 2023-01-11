from rest_framework import generics
from rest_framework.response import Response

from .models import Post
from .serializers import PostSerializer
from blogcategories.models import BlogCategory
from blogtags.models import BlogTag



class PostListApiView(generics.ListAPIView):
    model = Post
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    
    
class CreatePostView(generics.CreateAPIView):
    serializer_class = PostSerializer
    model = Post
    queryset = Post.objects.all()
    
    def post(self, request, *args, **kwargs):
        
        data = request.data
        category = BlogCategory.objects.get(id=int(data['category']))
        tags = []
        for tag in data['tags'].split(','):
            tags.append(BlogTag.objects.get(id=int(tag)))
        post = Post.objects.create(title = data['title'], image=data['image'],category=category, content=data['content'])
        post.tags.set(tags)
        serializer = PostSerializer(post, many=False)
        
            
        return Response(serializer.data)
        
        
class UpdatePostViewsCount(generics.UpdateAPIView):
    serializer_class = PostSerializer
    lookup_field = 'pk'
    model = Post
    queryset = Post.objects.all()
    
    def patch(self, request, *args, **kwargs):
        post = self.get_object()
        post.views += 1
        post.save()
        serializer = PostSerializer(post, many=False)
        
        return Response(serializer.data)
    


class UpdatePostView(generics.UpdateAPIView):
    serializer_class = PostSerializer
    lookup_field = 'pk'
    model = Post
    queryset = Post.objects.all()
    
    def patch(self, request, *args, **kwargs):
        post = self.get_object()
        data = request.data
        content = data.get('content', post.content)
        title = data.get('title', post.title)
        if request.FILES['image']:
            post.image = request.FILES['image']    
            
        post.content = content
        post.title = title
        
        if data.get('category'):
            category = BlogCategory.objects.get(id=int(data['category']))
            post.category = category
            
        
        if data.get('tags'):    
            tags = []
            for tag in data['tags'].split(','):
                tags.append(BlogTag.objects.get(id=int(tag)))
                post.tags.set(tags)
        
        post.save()
        serializer = PostSerializer(post, many=False)
        
            
        return Response(serializer.data)
    
    
class DeletePostView(generics.DestroyAPIView):
    model = Post
    lookup_field = 'pk'
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    