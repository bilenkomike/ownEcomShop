from django.db import models
from datetime import datetime
from random import randint
# Create your models here.
from currencies.models import Currency
from django.contrib.auth.models import User



class ProductsType(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name


class ProductCategory(models.Model):
    name = models.CharField(max_length=150)
    type = models.ForeignKey(ProductsType,null=True, blank=True, on_delete=models.CASCADE)
    def __str__(self):
        return f"{self.name} - {self.type}"
    
class ProductSubCategory(models.Model):
    name = models.CharField(max_length=150)
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    



def articul_number():
    return str(randint(100000000, 999999999))


class ProductBrand(models.Model):
    name = models.CharField(max_length=255)
    type = models.ForeignKey(ProductsType, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Product(models.Model):
    title =         models.CharField(max_length=255)
    brand =         models.ForeignKey(ProductBrand, on_delete=models.CASCADE, default=1)
    art_no =        models.CharField(max_length=9, default = articul_number, editable=False)
    qty =           models.IntegerField(default=0)
    image_1 =       models.ImageField(upload_to='products/%Y/%m/%d/%h-%i-%s', null=False, blank=False)
    image_2 =       models.ImageField(upload_to='products/%Y/%m/%d/%h-%i-%s', null=True, blank=True) 
    image_3 =       models.ImageField(upload_to='products/%Y/%m/%d/%h-%i-%s', null=True, blank=True)
    image_4 =       models.ImageField(upload_to='products/%Y/%m/%d/%h-%i-%s', null=True, blank=True)
    video =         models.FileField(upload_to='videos/%Y/%m/%d/%h-%i-%s',blank=True, verbose_name="", null=True)
    sale =          models.IntegerField(default=0)
    rating =        models.IntegerField(default=0,editable=False)
    views =         models.IntegerField(default=0,editable=False)
    type =          models.ForeignKey(ProductsType, on_delete=models.CASCADE, default=None)
    category =      models.ForeignKey(ProductCategory, on_delete=models.CASCADE, default=None)
    subcategory =   models.ForeignKey(ProductSubCategory, on_delete=models.CASCADE, default=None)
    date_added =    models.DateTimeField(default=datetime.now,editable=False, blank=True)
    date_updated =  models.DateTimeField(default=datetime.now, blank=True)
    
    
    
    def __str__(self):
        return self.title



class ProductPrices(models.Model):
    currency =  models.ForeignKey(Currency, on_delete=models.CASCADE)
    amount =    models.DecimalField(decimal_places=2, max_digits=10)
    product =   models.ForeignKey(Product, on_delete=models.CASCADE,null=True)
    def __str__(self):
        return f"{self.currency.symbol} {self.amount}"


    
class ProductDetails(models.Model):
    product =   models.ForeignKey(Product, on_delete=models.CASCADE)
    details =   models.TextField(null=True, blank=True)
    fabric =    models.TextField(null=True, blank=True)
    care =      models.TextField(null=True, blank=True)
    type =      models.ForeignKey(ProductsType, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.product.title} - {self.type}"
    

class LookComplete(models.Model):
    image =     models.ImageField(upload_to='complete/%Y/%m/%d/%h-%i-%s', null=True, blank=True)
    product =   models.ManyToManyField(Product)
    
    def __str__(self):
        return f"{str(self.id)} - look"






class ProductReview(models.Model):
    product =       models.ForeignKey(Product, on_delete=models.CASCADE)
    author =        models.ForeignKey(User, on_delete=models.DO_NOTHING)
    reply =         models.ForeignKey(User, on_delete=models.DO_NOTHING, null=True, blank=True, related_name="reply_user")
    likes =         models.IntegerField(default=0)
    dislikes =      models.IntegerField(default=0)
    review =        models.TextField()
    date =          models.DateTimeField(auto_now_add=True, editable=False)
    rating =        models.DecimalField(max_digits=3,decimal_places=1)
    
    def __str__(self):
        return f"{self.author.username} - {self.product.title}"
    
    
class ProductAttribute(models.Model):
    attribute = models.CharField(max_length=150,unique=True)
    def __str__(self):
        return self.attribute
    
    
    
class ProductAttributeValues(models.Model):
    value = models.CharField(max_length=100)
    displayValue = models.CharField(max_length=100)
    attribute = models.ForeignKey(ProductAttribute,on_delete=models.CASCADE)
    
    
    
    def __str__(self):
        return f"{self.attribute} – {self.value}"
    
    
class ProductSelectedAttributes(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    attribute = models.ManyToManyField(ProductAttribute)
    values = models.ManyToManyField(ProductAttributeValues)
    
    
    def __str__(self):
        return f"for product - {self.product}"