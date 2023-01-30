from .models import CompanyContact
from rest_framework import serializers

class CompanyContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyContact
        fields = "__all__"