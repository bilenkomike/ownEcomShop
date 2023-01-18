from rest_framework import generics
from .models import Store
from .serializers import StoresSerializer
from rest_framework.permissions import IsAdminUser



class StoresListView(generics.ListAPIView):
    model = Store
    serializer_class = StoresSerializer
    queryset = Store.objects.all()
    
    
class CreateStoreView(generics.CreateAPIView):
    serializer_class = StoresSerializer
    permission_classes = [IsAdminUser]
    
    
class UpdateStoreView(generics.UpdateAPIView):
    model = Store
    queryset = Store.objects.all()
    serializer_class = StoresSerializer
    lookup_field = 'pk'
    permission_classes = [IsAdminUser]
    
    
class DeleteStoreView(generics.DestroyAPIView):
    model = Store
    queryset = Store.objects.all()
    serializer_class = StoresSerializer
    lookup_field = 'pk'
    permission_classes = [IsAdminUser]