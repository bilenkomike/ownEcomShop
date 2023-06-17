from rest_framework import serializers

from .models import (
    Product, 
    ProductPrices, 
    ProductsType,
    ProductSubCategory,
    ProductDetails,
    ProductCategory, 
    ProductReview,
    ProductAttribute,
    ProductAttributeValues,
    ProductSelectedAttributes,
    ProductBrand
)

from images.serializers import ImageSerializer
from currencies.serializers import CurrencySerializer
from look.serializers import LookSerializer
from account.serializers import UserSerializer


class ProductAttributeValuesSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductAttributeValues
        fields = "__all__"




class ProductAttributesSerializer(serializers.ModelSerializer):
    values = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = ProductAttribute
        fields = "__all__"
        
    def get_values(self,obj):
        avalues = obj.productattributevalues_set.all()
        
        serializer = ProductAttributeValuesSerializer(avalues, many=True)
        return serializer.data
    
    
class ProductAttributesSelectedSerializer(serializers.ModelSerializer):
    
    attribute = ProductAttributesSerializer(read_only=True, many=True)
    values = ProductAttributeValuesSerializer(read_only=True, many=True)
    
    class Meta:
        model = ProductSelectedAttributes
        fields = ["attribute", 'values']


class ProductPriceSerializer(serializers.ModelSerializer):
    currency = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = ProductPrices
        fields = ['amount', 'currency', 'id']


    def get_currency(self,obj):
        currency = obj.currency
        serializer = CurrencySerializer(currency, many=False)
        return serializer.data




class ProductDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductDetails
        fields = "__all__"

class ProductsTypeSerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductsType
        fields = "__all__"
        
class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductCategory
        fields = ["name",'id']

class ProductSubCategorySerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductSubCategory
        fields = ["name",'id']
        
        
        
class ProductReviewSerialier(serializers.ModelSerializer):
    author = UserSerializer(many=False)
    class Meta:
        model  = ProductReview
        fields = "__all__"
        
        
class ProductBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductBrand
        fields = "__all__"
        
        
    
<<<<<<< Updated upstream
=======
    
class ProductMinifiedSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)

    prices = serializers.SerializerMethodField(read_only=True)
    type = serializers.StringRelatedField(many=False)
    category = serializers.StringRelatedField(many=False)
    subcategory = serializers.StringRelatedField(many=False)
    attributes = serializers.SerializerMethodField(read_only=True)
    
    brand = ProductBrandSerializer(read_only=True, many=False)
    
    class Meta:
        model = Product
        fields = '__all__'
        
    def get_prices(self, obj):
        prices = obj.productprices_set.all()
        serializer = ProductPriceSerializer(prices, many=True)
        return serializer.data
    
    def get_attributes(self, obj):
        attrs = obj.productselectedattributes_set.all()
        
        serializer = ProductAttributesSelectedSerializer(attrs, many=True)
        return serializer.data
>>>>>>> Stashed changes


class ProductSerializer(serializers.ModelSerializer):
        
    images = ImageSerializer(many=True)

    video = serializers.FileField(required=False)
    
    prices = serializers.SerializerMethodField(read_only=True)
    type = serializers.StringRelatedField(many=False)
    category = serializers.StringRelatedField(many=False)
    subcategory = serializers.StringRelatedField(many=False)
    product_details = serializers.SerializerMethodField(read_only=True)
    reviews = serializers.SerializerMethodField(read_only=True)
    
    attributes = serializers.SerializerMethodField(read_only=True)
    
    brand = ProductBrandSerializer(read_only=True, many=False)
    
    look = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Product
        fields = '__all__'
        
    
    def get_reviews(self,obj):
        reviews = obj.productreview_set.all()
        serializer = ProductReviewSerialier(reviews, many=True)
        return serializer.data
    

    def get_look(self, obj):
        look = obj.look_set.all()
        look.products = ProductSerializer(many=True)
        serializer = LookSerializer(look,many=True)
        return serializer.data
    
    
    def get_prices(self, obj):
        prices = obj.productprices_set.all()
        serializer = ProductPriceSerializer(prices, many=True)
        return serializer.data

    def get_product_details(self,obj):
        details = obj.productdetails_set.all()
        serializer = ProductDetailsSerializer(details, many=True)
        return serializer.data
    
    def get_attributes(self, obj):
        attrs = obj.productselectedattributes_set.all()
        
        serializer = ProductAttributesSelectedSerializer(attrs, many=True)
        return serializer.data
    



class ProductUpdateSerializer(ProductSerializer):
    image_1 = serializers.ImageField(required=False)
    title = serializers.CharField(required=False)
    
    class Meta: 
        model = Product
        fields = "__all__"