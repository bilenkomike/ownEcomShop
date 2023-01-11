from django.urls import path
from .views import BlogCategoriesViews,UpdateBlogCategories, DeleteBlogCategoryView,BlogCategoryDetailsView,CreateBlogCategoryView


urlpatterns = [
    path('', BlogCategoriesViews.as_view(), name='bblog-categories-api'),
    path('<int:pk>/',BlogCategoryDetailsView.as_view(), name='blogcategory-details-api'),
    path('<int:pk>/update/', UpdateBlogCategories.as_view(), name='blog-categories-update-api'),
    path('<int:pk>/delete/', DeleteBlogCategoryView.as_view(), name='blog-category-delete-api'),
    path('create/',CreateBlogCategoryView.as_view(), name='create-blog-category-api'),
    
]

