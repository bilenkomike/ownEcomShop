from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Shipping(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    country = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    zip = models.CharField(max_length=50, null=True,blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    