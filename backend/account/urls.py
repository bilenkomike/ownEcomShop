from django.urls import path
# from .views import user_views as views

from .views import RetrieveUserById,MyTokenObtainPairView,UsersViewSet,ProfileViewSet,UserAPIView,RegisterUserApiView,DeleteUser,UpdateUser


urlpatterns = [
    path('users/', UsersViewSet.as_view(), name="users"),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('register/', RegisterUserApiView.as_view(), name="register"),
    path('profile/', ProfileViewSet.as_view(), name="profile"),
    path('profile/update/', UserAPIView.as_view(), name="profile-update"),
    

    path('<str:pk>/', RetrieveUserById.as_view(),name='user'),

    path('update/<str:pk>/', UpdateUser.as_view(),name='user-update'),

    path('delete/<str:pk>/', DeleteUser.as_view(),name='user-delete'),
]


