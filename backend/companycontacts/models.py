from django.db import models

class CompanyContact(models.Model):
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=30)
    twitter = models.CharField(max_length=100)
    whatsapp = models.CharField(max_length=100)
    
