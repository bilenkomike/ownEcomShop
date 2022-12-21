from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        
        for k, v in serializer.items():
            data[k] = v

        return data


class UserSerializer(serializers.ModelSerializer):
    fullname = serializers.SerializerMethodField(read_only=True)
    isAdmin =  serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id','username', 'email', 'fullname','isAdmin']


    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_fullname(self, obj):
        fullname = obj.first_name

        if fullname == '':
            fullname = obj.email

        return fullname
    
class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id','username', 'email', 'fullname','isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
    
  