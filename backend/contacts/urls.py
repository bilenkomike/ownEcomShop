from django.urls import path

from .views import ContactListView, ContactCreateView, DeleteContactView, UpdateContactView, DetailsContactView



urlpatterns = [
    
    path('', ContactListView.as_view(), name='list-contact-api'),
    path('<int:pk>/', DetailsContactView.as_view(), name='details-contact-api'),
    path('<int:pk>/update/', UpdateContactView.as_view(), name='update-contact-api'),
    path('<int:pk>/delete/', DeleteContactView.as_view(), name='delete-contact-api'),
    path('create/', ContactCreateView.as_view(), name='create-contact-api'),
    
    
]
