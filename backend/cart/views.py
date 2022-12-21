from django.shortcuts import render

from .models import Cart
from .serializers import CartSerializer

from rest_framework import generics

class CartViewSet(generics.ListAPIView):
    model = Cart
    serializer_class = CartSerializer
    queryset = Cart.objects.all()
