from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .serializer import DeliverySerializer
from .models import Delivery
from order.models import Order

from datetime import datetime

class DeliveryViewSet(generics.ListAPIView):
    model = Delivery
    serializer_class = DeliverySerializer
    queryset = Delivery.objects.all()
    # parser_classes = [IsAuthenticated]
    
    def list(self,request):
        delivery = Delivery.objects.filter(order__order_no=self.request.data['order'])
        serializer = DeliverySerializer(delivery, many=True)
        
        return Response(serializer.data)
    


class AddDeliveryView(generics.CreateAPIView):
    queryset = Delivery.objects.all()
    serializer_class = DeliverySerializer
    
    def post(self,reqest):
        data = self.request.data
        order = Order.objects.get(id=data['order'])
        newdata = {}
        for i in data:
            if i == 'done':
                if data[i] == 'True':
                    newdata[i] = True
                else:
                    newdata[i] = False
            if i != 'order':
                newdata[i] = data[i]
            
        delivery = Delivery.objects.create(**newdata,order=order)
        serializer = DeliverySerializer(delivery, many=False)
        
        return Response(serializer.data)
    
    
class UpdateDelivery(generics.UpdateAPIView):
    
    def update(self,request):
        data = request.data
        
        delivery = Delivery.objects.get(order__order_no=data['order'],status=int(data['status']))
        
        if data['done'] == 'True':
            delivery.done = True
        else:
            delivery.done = False
        
        delivery.datetime = datetime.now()
        delivery.save()
        serializer = DeliverySerializer(delivery, many=False)
        return Response(serializer.data)