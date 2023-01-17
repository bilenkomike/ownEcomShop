from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.status import HTTP_208_ALREADY_REPORTED
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated

from .serializers import SubscriptionSerializer
from .models import Subscription
from product.models import ProductsType
from blogcategories.models import BlogCategory
from django.contrib.auth.models import User

from django.core.mail import EmailMessage
from django.template.loader import render_to_string

class SubscriptionListView(ListAPIView):
    
    serializer_class = SubscriptionSerializer
    model = Subscription
    permission_classes = [IsAuthenticated]
    
    
    def get_queryset(self):
        return Subscription.objects

    def list(self,request, *args, **kwargs):
        subscriptions = self.get_queryset().filter(user=self.request.user)
        serializer = SubscriptionSerializer(subscriptions, many=True)
        return Response(serializer.data)




class CreateSubscription(CreateAPIView):
    def create(self, request, *args, **kwargs):
        data = self.request.data
        blog_category = data.get('blog_category', None)
        product_category = data.get('product_category', None)
        user = User.objects.filter(email=data['email'])
        # print(user)
        if len(user) > 0:
            user = user[0]
        else:
            user = None  
            
        if product_category:
            product_category = ProductsType.objects.filter(name=product_category).first()
        if blog_category:
            blog_category = BlogCategory.objects.filter(name=blog_category).first()
            
        if len(Subscription.objects.filter(email=data['email'], product_category=product_category)) > 0 or len(Subscription.objects.filter(email=data['email'], blog_category=blog_category)) > 0:
            return Response('You`ve already subscribed check your email.', status=HTTP_208_ALREADY_REPORTED)
        subscription = Subscription.objects.create(user=user, email=data['email'], blog_category=blog_category, product_category=product_category)
        
        
        serialier = SubscriptionSerializer(subscription,many=False)
        
        
        template = render_to_string('subscription/subscription_template.html', {'product_category': product_category})
        email = EmailMessage(
            'Successful Subscription',
            template,
            'createxmike@gmail.com',
            [data['email']],
            headers={'Message-ID': 'subscription'},
            )
        email.fail_silently = False
        email.content_subtype = 'html'
        email.send()
            
        return Response(serialier.data)


class UpdateSubscriptionView(UpdateAPIView):
    model = Subscription
    lookup_field = 'pk'
    serializer_class = SubscriptionSerializer
    queryset = Subscription.objects.all()
    
    
    
class DeleteSubscriptionView(DestroyAPIView):
    model = Subscription
    lookup_field = 'pk'
    serializer_class = SubscriptionSerializer
    queryset = Subscription.objects.all()
    