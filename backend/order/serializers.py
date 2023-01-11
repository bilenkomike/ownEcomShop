from rest_framework import serializers
from .models import Order, OrderItem
from shipping.serializers import ShippingSerializer
from product.serializers import ProductSerializer


class OrderItemSerializer(serializers.ModelSerializer):
    
    product = ProductSerializer(many=False, read_only=True)
    
    class Meta:
        model = OrderItem
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):
    
    shipping = ShippingSerializer(many=False, read_only=True)
    orderItems = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Order 
        fields = "__all__"
        
        
    def get_orderItems(self, obj):
        orders = obj.orderitem_set.all()
        serializer = OrderItemSerializer(orders, many=True)
        return serializer.data
        