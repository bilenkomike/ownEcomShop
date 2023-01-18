from django.contrib.auth.models import User
from shipping.models import Shipping

from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser,AllowAny


from .serializers import UserSerializer, UserSerializerWithToken,MyTokenObtainPairSerializer

from django.contrib.auth.hashers import make_password
from rest_framework import status

from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework import generics


    

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    



class RegisterUserApiView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializerWithToken
    permission_classes = (AllowAny,)
    
    def create(self, request, *args, **kwargs):
        data = request.data
        
        user = User.objects.create(
            first_name=data['fullname'],
            email=data['email'],
            username=data['email'],
            password = make_password(data['password'])
        )
        
        user.save()
        Shipping.objects.create(user=user,phone='', country='', city='', zip='',address='')
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)




class UserAPIView(generics.UpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    
    def update(self, request, *args, **kwargs):
        
        
        
        user = request.user
        
        shipping = {}
        
        for i in request.data:
            if i == 'fullname':
                user.first_name = request.data[i]
            if i == 'password':
                user.password = make_password(request.data['password'])
            if i == 'email':
                user['username'] = request.data[i]
                user['email'] = request.data[i]
            if i == 'city':
                shipping['city'] = request.data[i]
            if i == 'country':
                shipping['country'] = request.data[i]
            if i == 'zip':
                shipping['zip'] = request.data[i]
            if i == 'address':
                shipping['address'] = request.data[i]
            if i == 'phone':
                shipping['phone'] = request.data[i]

        serializer = UserSerializer(user, many=False)
        shippin = Shipping.objects.filter(user=user.id)
        
        shippin.update(**shipping)
        
        
        user.save()
        return Response(serializer.data, status=status.HTTP_200_OK)



class ProfileViewSet(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    
    def get(self, request, *args, **kwargs):
        user = self.request.user
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)





class UsersViewSet(generics.ListAPIView):
    model = User
    serializer_class = UserSerializer
    queryset = User.objects.all()
    # permission_classes = [IsAdminUser]
    



class DeleteUser(generics.RetrieveDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = 'pk'
    permission_classes = [IsAuthenticated]
    
    


class RetrieveUserById(generics.RetrieveAPIView):
    model = User
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = 'pk'
    permission_classes = [IsAdminUser]
    
    
    
    


class UpdateUser(generics.UpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = (IsAdminUser,)
    
    def get_queryset(self, pk):
        
        return User.objects.get(id=pk)
    
    
    
    def update(self, request,pk):
        
        
        user = self.get_queryset(pk)
        for i in request.data:
            if i == 'fullname':
                user.first_name = request.data[i]
            if i == 'email':
                user['username'] = request.data[i]
                user['email'] = request.data[i]
                
        
        
        serializer = UserSerializer(user, many=False)
        user.save()
        return Response(serializer.data, status=status.HTTP_200_OK)