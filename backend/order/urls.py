from django.urls import path
from .views import OrdersListApiView, CreateOrderViewSet

urlpatterns = [
    path('', OrdersListApiView.as_view(), name='order-list-api'),
    path('create/', CreateOrderViewSet.as_view(), name="create-order-view-set"),
]
