from django.urls import path

from .views import (
    FAQListView,
    DeleteFAQView,
    UpdateFAQView,
    CreateFAQView
)


urlpatterns = [
    path('', FAQListView.as_view(), name='faq-list-api'),
    path('create/', CreateFAQView.as_view(), name='faq-create-api'),
    path('<int:pk>/update/', UpdateFAQView.as_view(), name='update-faq-api'),
    path('<int:pk>/delete/', DeleteFAQView.as_view(), name='delet-faq-view'),
]
