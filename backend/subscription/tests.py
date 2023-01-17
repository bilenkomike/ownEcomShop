from django.test import TestCase
from .models import Subscription
from product.models import ProductsType
from blogcategories.models import BlogCategory
from django.contrib.auth.models import User

from django.urls import reverse
from rest_framework import  status
from rest_framework.test import APITestCase,APIClient

class SubscriptionTesting(TestCase):
    def test_subscribeWithOutUser(self):
        email = 'bilenkomike18@gmail.com'
        fall_quite = False
        product_category = 'Women'        
        category = ProductsType.objects.filter(name=product_category).first()
        subscription = Subscription.objects.create(email=email, fall_quite=fall_quite, product_category=category)
        self.assertEqual(subscription.email, email)
        
    def test_subscriptionWithuser(self):
        email = 'bilenkom.0@gmail.com'
        fall_quite = True
        blog_category = 'Designers'        
        user = None
        user = User.objects.filter(username=email).first()
        post = BlogCategory.objects.filter(name=blog_category).first()
        subscription = Subscription.objects.create(email=email, fall_quite=fall_quite, blog_category=post, user=user)
        self.assertEqual(subscription.email, email)
        self.assertEqual(subscription.fall_quite, fall_quite)
        self.assertEqual(subscription.user,user)
        self.assertEqual(subscription.blog_category, post)
        
        
class SubbscriptionTestsApi(APITestCase):

    def test_create_account(self):
        url = reverse('user-subbscription-create-api')
        data = {'email':'bilenkom.0@gmail.com', 'fall_quite':1, 'blog_category':'Designers'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['email'], data['email'])
    