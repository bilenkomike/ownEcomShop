from django.urls import path

from .views import CurrenciesListApiView

urlpatterns = [
    path('', CurrenciesListApiView.as_view(), name="currecies-api-list"),
]
