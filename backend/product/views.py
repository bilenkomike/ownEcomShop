from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser


from currencies.models import Currency




from rest_framework import generics

import json

from .models import (
    Product, 
    ProductReview,
    ProductCategory, 
    ProductPrices, 
    ProductsType,
    ProductDetails,
    ProductSubCategory,
    ProductAttribute,
    ProductBrand
)

from .serializers import (
    ProductSerializer,
    ProductReviewSerialier,
    ProductCategorySerializer,
    ProductUpdateSerializer, 
    ProductSubCategorySerializer,
    ProductAttributesSerializer,
    ProductBrandSerializer,
    ProductPriceSerializer,
    ProductDetailsSerializer
)



from rest_framework.pagination import PageNumberPagination

class SmallPagesPagination(PageNumberPagination):  
    page_size = 1
    
    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,
            'page_number': self.page.number,
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data,
        })

   

class ProductListView(generics.ListAPIView):
    model = Product
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    pagination_class = SmallPagesPagination
    
    def get_queryset(self):
        return Product.objects.all()
    
    def get(self, request, *args, **kwargs):
        serializer = ProductSerializer(self.get_queryset(), many=True)
        page = self.paginate_queryset(serializer.data)
        return self.get_paginated_response(page)


class ProductDetailView(generics.RetrieveAPIView):
    model = Product
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    


class ProductViewSet(viewsets.ModelViewSet):
    
    serializer_class = ProductSerializer
    
    def get_queryset(self): 
        return Product.objects.all()
    
    def list(self, request, *args, **kwargs):
        products = self.get_queryset()
        serializer = ProductSerializer(products,many=True)
        # return Response('Works')
        return Response(serializer.data)
    
    def retrieve(self, request, *args, **kwargs):
        product = self.get_object()
        serializer = ProductSerializer(product)
        return Response(serializer.data)






class ProductCreateViewSet(viewsets.ModelViewSet):    
    serializer_class = ProductSerializer
    # permission_classes = [IsAdminUser]
    
    def create(self, request, *args, **kwargs):
        data = request.data
        image_2 = None
        image_3 = None
        image_4 = None
        video = None
        
        if data['image_2']:
            image_2 = data['image_2']
        if data['image_3']:
            image_3 = data['image_3']
        if  data['image_4']:
            image_4 = data['image_4']
        if data['video']:
            video = data['video']
                 
        
        type = ProductsType.objects.get(id=data['type'])
        category = ProductCategory.objects.get(id=data['category'])
        subcategory = ProductSubCategory.objects.get(id=data['subcategory'])
        
        product = Product.objects.create(
            title=data['title'], qty=data['qty'],
            sale=data['sale'],image_1=data['image_1'] , image_2 = image_2, image_3 = image_3, image_4 = image_4, video=video,
            type=type,category = category,subcategory=subcategory
        )
        prices = json.loads(data['prices'])    
        print(prices)
        for item in prices:
            currency = Currency.objects.get(symbol=item)
            ProductPrices.objects.create(currency=currency,amount=prices[item], product=product)
        
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    
    
    
    
class ProductDeleteViewSet(generics.DestroyAPIView):
    serializer_class = ProductSerializer
    model = Product
    queryset = Product.objects.all()
    permission_classes = [IsAdminUser]
    
    

    
    
    # viewsets.ModelViewSet
class ProductUpdateViewSet(generics.UpdateAPIView):
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductUpdateSerializer
    lookup_field = 'pk'
    # permission_classes = [IsAdminUser]
    
class ProductDetailsUpdateViewSet(generics.UpdateAPIView):
    model = ProductDetails
    queryset = ProductDetails.objects.all()
    serializer_class = ProductDetailsSerializer
    lookup_field = 'pk'
    
class ProductDetailsUpdateViewSet(generics.UpdateAPIView):
    model = ProductPrices
    queryset = ProductPrices.objects.all()
    serializer_class = ProductPriceSerializer
    lookup_field = 'pk'
    
class ProductTypesView(generics.ListAPIView):
    model = ProductCategory
    serializer_class = ProductCategorySerializer
    queryset = ProductCategory.objects.all()

class ProductCategoryView(generics.ListAPIView):
    model = ProductCategory
    serializer_class = ProductCategorySerializer
    queryset = ProductCategory.objects.all()
    
    
class ProductSubCategoryView(generics.ListAPIView):
    model = ProductSubCategory
    serializer_class = ProductSubCategorySerializer
    queryset = ProductSubCategory.objects.all()
    
    
class ProductAttributesView(generics.ListAPIView):
    model = ProductAttribute
    serializer_class = ProductAttributesSerializer
    queryset = ProductAttribute.objects.all()
    

class ProductBrandsViewSet(generics.ListAPIView):
    model = ProductBrand
    serializer_class = ProductBrandSerializer
    queryset = ProductBrand.objects.all()
    
    

class ProductPricesViewSet(generics.RetrieveAPIView):
    queryset = ProductPrices.objects.all()
    serializer_class = ProductPriceSerializer

    def retrieve(self, request,pk):
        currency = Currency.objects.get(symbol=pk)
        pricemax = self.get_queryset().filter(currency=currency).order_by('amount').first()
        pricemin = self.get_queryset().filter(currency=currency).order_by('-amount').first()

        serializermax = ProductPriceSerializer(pricemax,many=False)
        serializermin = ProductPriceSerializer(pricemin, many=False)
            
        return Response({
            "min": serializermin.data,
            "max": serializermax.data
        })