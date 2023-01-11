from django.db import models

from django.contrib.auth.models import User
from product.models import ProductCategory
from blogcategories.models import BlogCategory

class Subscription(models.Model):
    fullname = models.CharField(max_length=150)
    email = models.CharField(max_length=100)
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    product_category = models.ForeignKey(ProductCategory, null=True, blank=True, on_delete=models.CASCADE)
    blog_category = models.ForeignKey(BlogCategory, null=True, blank=True, on_delete=models.CASCADE)
    fall_quite = models.BooleanField(default=False)