from django.db import models

class Image(models.Model):
    image = models.ImageField(upload_to='%Y/%m/%d/%h-%i-%s', null=False, blank=False)
    alt = models.CharField("Alternative text", max_length=255) 
    
    def __str__(self):
        return self.alt