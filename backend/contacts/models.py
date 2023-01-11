from django.db import models
from datetime import datetime

class Contact(models.Model):
    fullname = models.CharField(max_length=150)
    email = models.CharField(max_length=100)
    message = models.TextField()
    phone = models.CharField(max_length=20)
    subject = models.CharField(max_length=255)
    answered = models.BooleanField(default=False)
    date = models.DateTimeField(default = datetime.now, editable=False)
