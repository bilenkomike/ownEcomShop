from django.urls import path
from .views import BlogTagsListApiView, CreateTagApiView, DeleteBlogTagApiView, UpdateBlogTagApiView

urlpatterns = [
    path('', BlogTagsListApiView.as_view(), name='list-bblog-tags-api'),
    path('create/', CreateTagApiView.as_view(), name='create-blog-tag-api'),
    path('<int:pk>/delete/', DeleteBlogTagApiView.as_view(), name='delete-blog-tag-api'),
    path('<int:pk>/update/', UpdateBlogTagApiView.as_view(), name='update-blog-tag-api'),
    
]
