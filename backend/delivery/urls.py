from django.urls import path

from .views import DeliveryViewSet,AddDeliveryView,UpdateDelivery

urlpatterns = [
    path('', DeliveryViewSet.as_view(), name="delivery-api"),
    path('add/',AddDeliveryView.as_view(), name="delivery-api-add"),
    path('update/',UpdateDelivery.as_view(), name="delivery-api-update")
]
