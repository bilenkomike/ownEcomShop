from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser


from currencies.models import Currency
from look.models import Look

from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import filters
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
    ProductBrand,
    ProductSelectedAttributes
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

class ProductPagesPagination(PageNumberPagination):  
    
    page_size_query_param = 'perPage'
    
    # max_page_size = 16
    
    def get_paginated_response(self, data):
        
        return Response({
            'count': self.page.paginator.count,
            'pages': self.page.paginator.num_pages,
            'page_number': self.page.number,
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data,
        })
        

class ReviewsPagesPagination(PageNumberPagination):  
    
    page_size = 4

    def get_paginated_response(self, data):
        
        return Response({
            'count': self.page.paginator.count,
            'pages': self.page.paginator.num_pages,
            'page_number': self.page.number,
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data,
        })
   

class ProductListView(generics.ListAPIView):
    model = Product
    serializer_class = ProductSerializer
    # queryset = Product.objects.all()
    pagination_class = ProductPagesPagination
    
    filter_backends = [filters.SearchFilter]
    search_fields = ['brand__name']
    
    def get_queryset(self):
        if len(self.request.query_params) > 0:
            params = self.request.query_params
            brand = self.request.query_params.get('brand', None)
            color = self.request.query_params.get('color', None)
            size = self.request.query_params.get('size', None)
            material = self.request.query_params.get('material', None)
            minprice = self.request.query_params.get('minprice', 0)
            maxprice = self.request.query_params.get('maxprice', None)
            currency = self.request.query_params.get('currency', None)
            products = Product.objects.all()
            if brand != None:
                products = products.filter(brand__name=params['brand'])

            if color != None:
                filtered_prods = []
                for product in products:
                    attrs = ProductSelectedAttributes.objects.filter(product=product, values__value=color)
                    if len(attrs) > 0:
                        filtered_prods.append(product)
                products = filtered_prods
                
                
            if material:
                filtered_prods = []
                for product in products:
                    attrs = ProductSelectedAttributes.objects.filter(product=product, values__value=material)
                    if len(attrs) > 0:
                        filtered_prods.append(product)
                
                products = filtered_prods
                
            if size != None:    
                filtered_prods = []
                for product in products:
                    attrs = ProductSelectedAttributes.objects.filter(product=product, values__value=size)
                    if len(attrs) > 0:
                        filtered_prods.append(product)
                
                products = filtered_prods
            
            
        
            if int(minprice) >= 0 and currency != None:    
                filtered_prods = []
                for product in products:
                    prices = ProductPrices.objects.filter(product=product, amount__gte=int(minprice), currency__symbol=currency)
                    if len(prices) > 0:
                        filtered_prods.append(product)
                
                products = filtered_prods
                
            if maxprice != None and int(maxprice) >= 0 and currency != None:     
                filtered_prods = []
                for product in products:
                    prices = ProductPrices.objects.filter(product=product, amount__lte=int(maxprice), currency__symbol=currency)
                    if len(prices) > 0:
                        filtered_prods.append(product)

                
                products = filtered_prods
            
            
            return products
        else:
            return Product.objects.all()
        
        
        
    
    def get(self, request, *args, **kwargs):
    
        serializer = ProductSerializer(self.get_queryset(), many=True)
        
        page = self.paginate_queryset(serializer.data)
        
        return self.get_paginated_response(page)


class ProductDetailView(generics.RetrieveAPIView):
    model = Product
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    
    # def retrieve(self, request, *args, **kwargs):
    #     product = self.get_object()
    #     look = Look.objects.get(products__in=[product])
    #     # look = 
    #     # for prod in look.products:
    #     #     if prod != product:
    #     #         prod = 
    #     return Response('some')
    
class ProductDetailReviewView(generics.ListAPIView):
    serializer_class = ProductReviewSerialier
    pagination_class = ReviewsPagesPagination
    
    def get_queryset(self):
        return ProductReview.objects
    
    def get(self,request,pk):
        product = Product.objects.get(id=pk)
        reviews = self.get_queryset().filter(product=product).order_by('date')
        obj = {"1": 0, "2": 0, "3":0,"4":0,"5":0}
        for review in reviews: 
            obj[str(int(review.rating))] += 1
        serializer = ProductReviewSerialier(reviews, many=True)
        
        page = self.paginate_queryset(serializer.data)
        data = {
            "data":page,
            "stats": obj
        }
        return self.get_paginated_response(data)



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