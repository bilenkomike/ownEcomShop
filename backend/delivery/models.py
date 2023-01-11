from django.db import models
from order.models import Order
from datetime import datetime

class Delivery(models.Model):
    
    class Status(models.IntegerChoices):
        OrderPlaced = 0
        DocumentationPrepared = 1
        BookingArranged = 2
        Collected = 3
        InTransitToDestination = 4
        ArrivedAtDestination = 5
        OutForDelivery = 6
        Delivered = 7
    
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    status = models.IntegerField(choices=Status.choices, default=Status.OrderPlaced)
    location = models.CharField(max_length=255)
    datetime = models.DateTimeField(default=datetime.now)
    done = models.BooleanField(default=False)
