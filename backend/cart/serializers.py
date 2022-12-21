from rest_framework import serializers

from .models import Cart
from product.serializers import ProductSerializer


class CartSerializer(serializers.ModelSerializer):
    
    product = ProductSerializer(read_only=True, many=False)
    
    class Meta: 
        model = Cart
        fields = "__all__"