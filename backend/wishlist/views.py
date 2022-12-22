from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import WishListSerializer
from .models import WishList
from product.models import Product,ProductAttributeValues


class WishListView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    def list(self, request):
        print(request.user)
        wishlist = WishList.objects.filter(user=request.user)
        
        serializer = WishListSerializer(wishlist, many=True)
        return Response(serializer.data)
    
        
    


class WishListAddView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    def create(self, request):
        attrs = []
        
        for attr in request.data['attributes'].split(','):
            attrs.append(ProductAttributeValues.objects.get(id=attr).id)
        product = Product.objects.get(id=request.data['product'])
        
        
        wish = WishList.objects.create(user=request.user, product=product)
        wish.selected_attributes.set(attrs)
        
        serializer = WishListSerializer(wish, many=False)
        return Response(serializer.data)
