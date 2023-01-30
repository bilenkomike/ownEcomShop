from rest_framework.generics import RetrieveAPIView, UpdateAPIView
from .serializers import CompanyContactSerializer
from .models import CompanyContact
from rest_framework.permissions import IsAdminUser



class CompanyContactView(RetrieveAPIView):
    model = CompanyContact
    serializer_class = CompanyContactSerializer
    queryset = CompanyContact.objects.all()
    lookup_field = 'pk'
    
class UpdateCompanyContacts(UpdateAPIView):
    model = CompanyContact
    serializer_class = CompanyContactSerializer
    queryset = CompanyContact.objects.all()
    lookup_field = 'pk'
    permission_classes = [IsAdminUser]
