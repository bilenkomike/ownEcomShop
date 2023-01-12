from django.urls import path

from .views import (
    WishListView, 
    WishListAddView,
    DeleteWishListView,
    WishListUpdateItemView
)


urlpatterns = [
    path('', WishListView.as_view(), name='api-wishlist'),
    path('create/', WishListAddView.as_view(), name='add-to-wishlist-api'),
    path('<int:pk>/delete/', DeleteWishListView.as_view(), name='delete-wishlist-item-api'),
    path('<int:pk>/update/', WishListUpdateItemView.as_view(), name="update-wishlist-api"),
    
]
