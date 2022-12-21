from django.db import models

from product.models import Product
# Create your models here.

class Look(models.Model):
    image = models.ImageField(upload_to='looks/%Y-%m-%d/%H-%i-%s', null=True,blank=True)
    products = models.ManyToManyField(Product)