from django.db import models
from datetime import datetime

from blogcategories.models import BlogCategory
from blogtags.models import BlogTag
from images.models import Image


TypeChoices = (
    ("SUBTITLE", "Subtitle"),
    ("TEXT", "Text"),
    ("QUOTE", "Quote"),
    ("LIST", "List"),
)

class PostContentOptionList(models.Model):
    option = models.TextField()

class PostContentItem(models.Model):
    options = models.ManyToManyField(PostContentOptionList, null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    type = models.CharField(choices=TypeChoices, max_length=20)
    

class Post(models.Model):
    category = models.ForeignKey(BlogCategory, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='posts/%Y/%m/%d/%h-%i-%s', null=False, blank=False)
    content = models.TextField()
    tags =  models.ManyToManyField(BlogTag)
    title = models.CharField(max_length=200)
    date = models.DateTimeField(default=datetime.now)
    views = models.IntegerField(default=0)
    slug = models.SlugField(max_length=200, null=False, default="")

    








