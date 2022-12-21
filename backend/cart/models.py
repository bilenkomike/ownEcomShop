from django.db import models

from django.contrib.auth.models import User

from product.models import Product, ProductAttributeValues

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    qty = models.IntegerField(default=1)
    selected_attributes = models.ManyToManyField(ProductAttributeValues)
    
    def __str__(self):
        return f"{self.user.username}s` cart with {self.product.title} with qty{self.qty}"
    
    