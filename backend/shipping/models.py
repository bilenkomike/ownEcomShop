from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Shipping(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    zip = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    