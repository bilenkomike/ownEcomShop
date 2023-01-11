from django.db import models

class BlogCategory(models.Model):
    name = models.CharField(max_length=200)
