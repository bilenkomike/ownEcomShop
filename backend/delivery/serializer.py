from rest_framework import serializers
from .models import Delivery
from order.serializers import OrderSerializer



class DeliverySerializer(serializers.ModelSerializer):
    
    order = OrderSerializer(many=False, read_only=True)
    
    class Meta: 
        model = Delivery
        fields = "__all__"