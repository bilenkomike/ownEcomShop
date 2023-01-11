from django.db import models
from datetime import datetime

from blogcategories.models import BlogCategory
from blogtags.models import BlogTag

class Post(models.Model):
    category = models.ForeignKey(BlogCategory, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='posts/%Y/%m/%d/%h-%i-%s', null=False, blank=False)
    content = models.TextField()
    tags =  models.ManyToManyField(BlogTag)
    title = models.CharField(max_length=200)
    date = models.DateTimeField(default=datetime.now)
    views = models.IntegerField(default=0)


