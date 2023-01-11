from django.urls import path

from .views import StoresListView, DeleteStoreView, UpdateStoreView, CreateStoreView

urlpatterns = [
    path('', StoresListView.as_view(), name='stores-list-api'),
    path('create/', CreateStoreView.as_view(), name='create-store-api'),
    path('<int:pk>/update/', UpdateStoreView.as_view(), name='update-store-api'),
    path('<int:pk>/delete/', DeleteStoreView.as_view(), name='delete-store-api'),
]
