from django.shortcuts import render

from rest_framework.generics import ListAPIView

from .models import Currency
from .serializers import CurrencySerializer

class CurrenciesListApiView(ListAPIView):
    model = Currency
    serializer_class = CurrencySerializer
    queryset = Currency.objects.all()