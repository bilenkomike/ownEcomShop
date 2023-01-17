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


from currencies.serializers import CurrencySerializer
from look.serializers import LookSerializer

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
        fields = ["attribute", 'values', 'qty']


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
    
    subbcategories = serializers.SerializerMethodField(read_only=True)
    
    class Meta: 
        model = ProductCategory
        fields = "__all__"
        
    def get_subbcategories(self,obj):
        subcategories = obj.productsubcategory_set.all()
        serializer=  ProductSubCategorySerializer(subcategories, many=True)
        return serializer.data

class ProductSubCategorySerializer(serializers.ModelSerializer):
    class Meta: 
        model = ProductSubCategory
        fields = "__all__"
        

class MeagMenuSerializer(serializers.ModelSerializer):
    categories = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = ProductsType
        fields = "__all__"
        
    def get_categories(self,obj):
        categories = obj.productcategory_set.all()
        serializer = ProductCategorySerializer(categories, many=True)
        return serializer.data

        
        
class ProductReviewSerialier(serializers.ModelSerializer):
    class Meta:
        model  = ProductReview
        fields = "__all__"
        
        
class ProductBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductBrand
        fields = "__all__"
        
        
    
    
class ProductMinifiedSerializer(serializers.ModelSerializer):
    image_1 = serializers.ImageField()
    image_2 = serializers.ImageField(required=False)
    image_3 = serializers.ImageField(required=False)
    image_4 = serializers.ImageField(required=False)

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


class ProductSerializer(serializers.ModelSerializer):
        
    
    image_1 = serializers.ImageField()
    image_2 = serializers.ImageField(required=False)
    image_3 = serializers.ImageField(required=False)
    image_4 = serializers.ImageField(required=False)
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
    
    def get_attributes(self, obj):
        attrs = obj.productselectedattributes_set.all()
        
        serializer = ProductAttributesSelectedSerializer(attrs, many=True)
        return serializer.data

    def get_product_details(self,obj):
        details = obj.productdetails_set.all()
        serializer = ProductDetailsSerializer(details, many=True)
        return serializer.data
    
    
    



class ProductUpdateSerializer(ProductSerializer):
    image_1 = serializers.ImageField(required=False)
    title = serializers.CharField(required=False)
    
    class Meta: 
        model = Product
        fields = "__all__"