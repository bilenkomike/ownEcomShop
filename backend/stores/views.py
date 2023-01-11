from rest_framework import generics
from .models import Store
from .serializers import StoresSerializer



class StoresListView(generics.ListAPIView):
    model = Store
    serializer_class = StoresSerializer
    queryset = Store.objects.all()
    
    
class CreateStoreView(generics.CreateAPIView):
    serializer_class = StoresSerializer
    
    
class UpdateStoreView(generics.UpdateAPIView):
    model = Store
    queryset = Store.objects.all()
    serializer_class = StoresSerializer
    lookup_field = 'pk'
    
    
class DeleteStoreView(generics.DestroyAPIView):
    model = Store
    queryset = Store.objects.all()
    serializer_class = StoresSerializer
    lookup_field = 'pk'