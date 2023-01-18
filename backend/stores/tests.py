from django.test import TestCase
from django.urls import reverse
from datetime import datetime
from .models import Store

from rest_framework.test import APITestCase
from rest_framework.status import HTTP_201_CREATED, HTTP_200_OK, HTTP_204_NO_CONTENT
from django.contrib.auth.models import User
from shipping.models import Shipping



class StoreTest(TestCase):
    
    def test_store(self):
        email = 'some@gmail.com'
        phone = '+31724551874'
        address = 'some address'
        city = 'some city'
        country = 'Lit'
        postalcode = 'LV-1000'
        work_from = datetime.strptime('9:00:00', '%H:%M:%S').time()
        
        work_till = datetime.strptime("19:00:00", '%H:%M:%S').time()
        
        
        store = Store.objects.create(email=email, city=city, country=country, phone=phone,address=address, postalcode=postalcode, work_from=work_from, work_till=work_till)
        self.assertEqual(store.city, city)
        self.assertEqual(store.email, email)
        self.assertEqual(store.phone, phone)
        self.assertEqual(store.country, country)
        self.assertEqual(store.postalcode, postalcode)
        self.assertEqual(store.address, address)
        self.assertEqual(store.work_from, work_from)
        self.assertEqual(store.work_till,work_till)
        
        
        
class StoreApiTests(APITestCase):
    def authenticate(self):
        email = 'some@gmial.com'
        password = 'Some_12345'
        user = User.objects.create_superuser(username=email, email=email, password=password)
        Shipping.objects.create(user=user)
        response  = self.client.post(reverse('login'), data={"username":email, 'password':password})
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {response.data['token']}")
        
    def test_api_endpoint(self):
        response = self.client.get('/api/stores/')
        self.assertEqual(response.status_code, HTTP_200_OK)
    
    def test_create_store(self):
        email = 'some@gmail.com'
        phone = '+31724551874'
        address = 'some address'
        city = 'some city'
        country = 'Lit'
        postalcode = 'LV-1000'
        work_from = datetime.strptime('9:00:00', '%H:%M:%S').time()
        
        work_till = datetime.strptime("19:00:00", '%H:%M:%S').time()
        self.authenticate()
        response = self.client.post(reverse('create-store-api'), data={
            "email":email,
            "phone": phone,
            "address":address,
            "city":city,
            "country":country,
            "postalcode": postalcode,
            "work_from":work_from,
            "work_till": work_till
        })
        self.assertEqual(response.status_code, HTTP_201_CREATED)
        self.assertEqual(response.data['city'], city)
        self.assertEqual(response.data['email'], email)
        self.assertEqual(response.data['phone'], phone)
        self.assertEqual(response.data['country'], country)
        self.assertEqual(response.data['postalcode'], postalcode)
        self.assertEqual(response.data['address'], address)
        self.assertEqual(datetime.strptime(response.data['work_from'],'%H:%M:%S').time(), work_from)
        self.assertEqual(datetime.strptime(response.data['work_till'],'%H:%M:%S').time(),work_till)
        
    def test_strore_update(self):
        email = 'some@gmail.com'
        phone = '+31724551874'
        address = 'some address'
        city = 'some city'
        country = 'Lit'
        postalcode = 'LV-1000'
        work_from = datetime.strptime('9:00:00', '%H:%M:%S').time()
        
        work_till = datetime.strptime("19:00:00", '%H:%M:%S').time()
        self.authenticate()
        response = self.client.post(reverse('create-store-api'), data={
            "email":email,
            "phone": phone,
            "address":address,
            "city":city,
            "country":country,
            "postalcode": postalcode,
            "work_from":work_from,
            "work_till": work_till
        })
        self.assertEqual(response.status_code, HTTP_201_CREATED)
        
        self.assertEqual(response.data['email'], email)
        newemail = 'somenewemail'
        
        url = reverse('update-store-api', kwargs={'pk': response.data['id']})
        response1 = self.client.patch(url, data={"email":newemail})
        self.assertEqual(response1.status_code, HTTP_200_OK)
        
        self.assertEqual(response1.data['email'], newemail)
        
    def test_delete_store(self):
        email = 'some@gmail.com'
        phone = '+31724551874'
        address = 'some address'
        city = 'some city'
        country = 'Lit'
        postalcode = 'LV-1000'
        work_from = datetime.strptime('9:00:00', '%H:%M:%S').time()
        
        work_till = datetime.strptime("19:00:00", '%H:%M:%S').time()
        self.authenticate()
        response = self.client.post(reverse('create-store-api'), data={
            "email":email,
            "phone": phone,
            "address":address,
            "city":city,
            "country":country,
            "postalcode": postalcode,
            "work_from":work_from,
            "work_till": work_till
        })
        self.assertEqual(response.status_code, HTTP_201_CREATED)
        
        self.assertEqual(response.data['email'], email)
        url = reverse('delete-store-api', kwargs={'pk': response.data['id']})
        response1 = self.client.delete(url)
        self.assertEqual(response1.status_code, HTTP_204_NO_CONTENT)