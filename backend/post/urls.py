from django.urls import path

from .views import PostListApiView, CreatePostView, UpdatePostViewsCount, UpdatePostView, DeletePostView

urlpatterns = [
    path('', PostListApiView.as_view(), name='posts-api-view'),
    path('create/', CreatePostView.as_view(), name='create-api-post-view'),
    path('<int:pk>/update-views/', UpdatePostViewsCount.as_view(), name='update-views-count-on-post-api'),
    path('<int:pk>/update/', UpdatePostView.as_view(), name="update-post-api"),
    path('<int:pk>/delete/', DeletePostView.as_view(), name='delete-post-api')
]
