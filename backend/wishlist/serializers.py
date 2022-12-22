from rest_framework import serializers


from .models import WishList
from product.serializers import ProductSerializer

class WishListSerializer(serializers.ModelSerializer):
    
    product = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = WishList
        fields = "__all__"
        
    def get_product(self, obj):
        product = obj.product
        serializer = ProductSerializer(product, many=False)
        return serializer.data