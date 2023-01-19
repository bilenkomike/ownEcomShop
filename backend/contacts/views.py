from .models import Contact
from .serialiers import ContactSerializer

from rest_framework import generics 
from rest_framework.permissions import IsAdminUser

class ContactListView(generics.ListAPIView):
    model = Contact
    queryset = Contact.objects.filter(answered=False)
    serializer_class = ContactSerializer
    # permission_classes = [IsAdminUser]

class DetailsContactView(generics.RetrieveAPIView):
    model = Contact
    queryset = Contact.objects.all()
    permission_classes = [IsAdminUser]
    serializer_class = ContactSerializer
    lookup_field = 'pk'
    

class ContactCreateView(generics.CreateAPIView):
    serializer_class = ContactSerializer
    

class UpdateContactView(generics.UpdateAPIView):
    model = Contact
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    lookup_field = 'pk'
    permission_classes = [IsAdminUser]
    

class DeleteContactView(generics.DestroyAPIView):
    model = Contact
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    lookup_field = 'pk'
    permission_classes = [IsAdminUser]
    