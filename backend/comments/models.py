from django.db import models

from post.models import Post

from django.contrib.auth.models import User
from datetime import datetime

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=True, blank=True)
    email = models.CharField(max_length=255)
    fullname = models.CharField(max_length=255)
    comment = models.TextField()
    date = models.DateTimeField(default=datetime.now)
    reply = models.BooleanField(default=False)
    reply_email = models.CharField(max_length=255, null=True, blank=True)
    reply_fullname = models.CharField(max_length=100,null=True, blank=True)