from django.db import models

from product.models import Product, ProductAttributeValues

from shipping.models import Shipping
from django.contrib.auth.models import User

from random import randint
def articul_number():
    return str(randint(100000000, 999999999))

class Order(models.Model):
    
    class Status(models.IntegerChoices):
        NOT_PAID = 0
        CANCELED = 1
        INPROGRESS = 2
        SUCCESS = 3
        
    class ShippingChoices(models.IntegerChoices):
        COURIER = 0
        PICKUPFROMSTOR = 1
        UPS = 2
        PICKUPFROMSTORCUSTOM = 3
        GE = 4
    
    shipping = models.ForeignKey(Shipping, on_delete=models.DO_NOTHING)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.IntegerField(choices = Status.choices, default=Status.NOT_PAID)
    order_no = models.CharField(default=articul_number, editable=False, max_length=20)
    notify = models.BooleanField(default=False)
    paid = models.BooleanField(default=False)
    shipping_method = models.IntegerField(choices=ShippingChoices.choices)
    additional = models.TextField(null=True, blank=True)


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    selected_attributes = models.ManyToManyField(ProductAttributeValues)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    qty = models.IntegerField(default=1)


