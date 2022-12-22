from django.urls import path

from .views import WishListView, WishListAddView


urlpatterns = [
    path('', WishListView.as_view(), name='api-wishlist'),
    path('add/', WishListAddView.as_view(), name='add-to-wishlist-api'),
]
