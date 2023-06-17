from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from .models import BlogCategory
from .serializers import BlogCategorySerializer



class BlogCategoriesViews(generics.ListAPIView):
    model = BlogCategory
    serializer_class = BlogCategorySerializer
    queryset = BlogCategory.objects.all()
    
    
class BlogCategoryDetailsView(generics.RetrieveAPIView):
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer
    lookup_field = 'pk'
    
    
class UpdateBlogCategories(generics.UpdateAPIView):
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer
    lookup_field = 'pk'
    
    
class DeleteBlogCategoryView(generics.DestroyAPIView):
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer
    lookup_field = 'pk'
    
    
class CreateBlogCategoryView(generics.CreateAPIView):
    serializer_class = BlogCategorySerializer