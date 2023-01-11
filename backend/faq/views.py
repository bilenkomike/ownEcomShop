from rest_framework import generics

from .models import FAQ
from .serialiers import FAQSerialier


class FAQListView(generics.ListAPIView):
    model = FAQ
    serializer_class = FAQSerialier
    queryset = FAQ.objects.all()
    
    
class CreateFAQView(generics.CreateAPIView):
    serializer_class = FAQSerialier
    

class UpdateFAQView(generics.UpdateAPIView):
    model = FAQ
    serializer_class = FAQSerialier
    queryset = FAQ.objects.all()
    lookup_field = 'pk'
    
    
class DeleteFAQView(generics.DestroyAPIView):
    model = FAQ
    serializer_class = FAQSerialier
    queryset = FAQ.objects.all()
    lookup_field = 'pk'
    
    
