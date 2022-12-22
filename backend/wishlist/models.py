from django.db import models
from django.contrib.auth.models import User
from product.models import Product,ProductAttributeValues

class WishList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    selected_attributes = models.ManyToManyField(ProductAttributeValues)