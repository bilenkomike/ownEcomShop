from rest_framework import generics

from .models import BlogTag
from .serializers import BlogTagSerializer

class BlogTagsListApiView(generics.ListAPIView):
    model = BlogTag
    queryset = BlogTag.objects.all()
    serializer_class = BlogTagSerializer


class CreateTagApiView(generics.CreateAPIView):
    serializer_class = BlogTagSerializer    
    
    
class DeleteBlogTagApiView(generics.DestroyAPIView):
    lookup_field = 'pk'
    model = BlogTag
    serializer_class = BlogTagSerializer
    queryset = BlogTag.objects.all()
    

class UpdateBlogTagApiView(generics.UpdateAPIView):
    lookup_field = 'pk'
    model = BlogTag
    serializer_class = BlogTagSerializer
    queryset = BlogTag.objects.all()