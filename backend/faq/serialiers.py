from rest_framework import serializers
from .models import FAQ


class FAQSerialier(serializers.ModelSerializer):
    
    class Meta:
        model = FAQ
        fields = "__all__"