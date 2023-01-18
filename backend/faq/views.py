from rest_framework import generics

from .models import FAQ
from .serialiers import FAQSerialier
from rest_framework.permissions import IsAdminUser


class FAQListView(generics.ListAPIView):
    model = FAQ
    serializer_class = FAQSerialier
    queryset = FAQ.objects.all()
    
    
class CreateFAQView(generics.CreateAPIView):
    serializer_class = FAQSerialier
    permission_classes = [IsAdminUser]
    

class UpdateFAQView(generics.UpdateAPIView):
    model = FAQ
    serializer_class = FAQSerialier
    queryset = FAQ.objects.all()
    lookup_field = 'pk'
    permission_classes = [IsAdminUser]
    
    
class DeleteFAQView(generics.DestroyAPIView):
    model = FAQ
    serializer_class = FAQSerialier
    queryset = FAQ.objects.all()
    lookup_field = 'pk'
    permission_classes = [IsAdminUser]