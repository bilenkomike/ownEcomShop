from django.db import models

class BlogTag(models.Model):
    tag = models.CharField(max_length=200, unique=True)
