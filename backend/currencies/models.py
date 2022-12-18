from django.db import models

# Create your models here.
class Currency(models.Model):
    currency = models.CharField(max_length=10, unique=True)
    symbol = models.CharField(max_length=5, unique=True)
    
    def __str__(self):
        return f"{self.currency.upper()} - {self.symbol}"
    
    
    class Meta:
        verbose_name = 'Currency'
        verbose_name_plural = 'Currencies'