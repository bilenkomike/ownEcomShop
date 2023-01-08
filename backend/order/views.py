from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Order, OrderItem
from .serializers import OrderSerializer
from cart.models import Cart
from shipping.models import Shipping

class OrdersListApiView(generics.ListAPIView):
    
    permission_classes = [IsAuthenticated]
    def list(self, request):
        orders = Order.objects.filter(user=self.request.user).order_by('-id')
        serializer = OrderSerializer(orders,many=True)
        return Response(serializer.data)
        
        
class CreateOrderViewSet(generics.CreateAPIView):
    def post(self, request):
        status = 0
        notify = False
        paid = False
        shipping_method = 0
        additional_info = ''
        shipping = Shipping.objects.get(user=request.user)
        print(request)
        if request.paid == 'True':
            paid = True
        order = Order.objects.create(shipping = shipping, user=request.user, status=status, notify=notify, paid=paid, shipping_method=shipping_method, additional=additional_info)
        
        
        if paid:
            pass
        
        cartItems = Cart.objects.filter(user=request.user)
        
        
        for cartItem in cartItems:
            orderitem = OrderItem.objects.create(product=cartItem.product, order=order, qty=cartItem.qty)
            attrs = []
            for attr in cartItem.selected_attributes.all():
                attrs.append(attr.id)
                
            orderitem.selected_attributes.set(attrs)
            
        serailizer = OrderSerializer(order, many=False)
        
        return Response(serailizer.data)
    
    

class UpdateOrderStatus(generics.UpdateAPIView):
    
    def update(self,request):
        data = request.data
        
        delivery = Order.objects.get(order_no=data['order_no'])
        
        if data['done'] == 'True':
            delivery.done = True
        else:
            delivery.done = False
        
        # delivery.datetime = datetime.now()
        # delivery.save()
        # serializer = DeliverySerializer(delivery, many=False)
        # return Response(serializer.data)