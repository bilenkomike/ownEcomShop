from django.db import models
from datetime import datetime


class Store(models.Model):
    email = models.CharField(max_length=250)
    phone = models.CharField(max_length=15) 
    address = models.CharField(max_length=200)   
    city = models.CharField(max_length=150)
    country = models.CharField(max_length=200)
    postalcode = models.CharField(max_length=20)
    
    work_from = models.TimeField(default=datetime.now)
    work_till = models.TimeField(default=datetime.now)
    image = models.ImageField(upload_to='stores/%Y/%m/%d', null=True, blank=True)
