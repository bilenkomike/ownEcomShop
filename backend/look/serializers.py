from rest_framework import serializers

from .models import Look

class LookSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Look
        fields = "__all__"
        
        