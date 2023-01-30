from django.urls import path
from .views import (
    CompanyContactView,
    UpdateCompanyContacts
)

urlpatterns = [
    path('<int:pk>/', CompanyContactView.as_view(), name='render-companycontacts'),
    path('<int:pk>/update/',UpdateCompanyContacts.as_view(), name='update-company-contacts'),
]
