from django.urls import path
from .views import (
    SubscriptionListView,
    CreateSubscription,
    DeleteSubscriptionView,
    UpdateSubscriptionView
)


urlpatterns = [
    path('', SubscriptionListView.as_view(), name='user-specific-subscriptions-api'),
    path('create/', CreateSubscription.as_view(), name='user-subbscription-create-api'),
    path('<int:pk>/update/', UpdateSubscriptionView.as_view(), name='update-subscription-api'),
    path('<int:pk>/delete/', DeleteSubscriptionView.as_view(), name='delete-subscription-api'),
]
