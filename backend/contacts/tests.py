from django.test import TestCase
from .models import Contact
from rest_framework.test import APITestCase
from django.contrib.auth.models import User
from django.urls import reverse
from shipping.models import Shipping
from rest_framework.status import HTTP_201_CREATED, HTTP_200_OK, HTTP_204_NO_CONTENT


class  ContactsTest(TestCase):
    def test_contact(self):
        fullname = 'Mykhailo Bilenko'
        email = 'blalvlvl@gmai.com'
        message = 'Some message! COntact me please'
        phone = '+31724551874'
        subject = 'some'
        
        contact = Contact.objects.create(fullname=fullname, email=email, message=message, phone=phone, subject=subject)
        
        self.assertEqual(contact.email, email)
        self.assertEqual(contact.fullname, fullname)
        self.assertEqual(contact.answered, False)
        self.assertEqual(contact.message, message)
        self.assertEqual(contact.phone, phone)
        self.assertEqual(contact.subject, subject)
        
        
        
    
class TestApiContacts(APITestCase):
    def authenticate(self):
        email = 'some@gmail.com'
        password = '@some2000'
        user = User.objects.create_superuser(username=email,email=email,password=password)
        Shipping.objects.create(user=user)
        response = self.client.post(reverse('login'), data={'username':email, 'password':password})
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {response.data['token']}")
    
    def create(self):
        fullname = 'Mykhailo BBilenko'
        email = 'some@gmail.com'
        message = 'some message'
        phone = '222-222-2222'
        subject = 'my subject'    

        response = self.client.post(reverse('create-contact-api'), data={
            'email': email,
            'fullname': fullname,
            'message': message,
            "phone": phone,
            "subject": subject,
            # "answered": False
        })
        return response
    
    
    def test_conact_create(self):
        fullname = 'Mykhailo BBilenko'
        email = 'some@gmail.com'
        message = 'some message'
        phone = '222-222-2222'
        subject = 'my subject'    

        response = self.client.post(reverse('create-contact-api'), data={
            'email': email,
            'fullname': fullname,
            'message': message,
            "phone": phone,
            "subject": subject,
            # "answered": False
        })
        self.assertEqual(response.status_code, HTTP_201_CREATED)
        self.assertEqual(response.data['email'], email)
        self.assertEqual(response.data['fullname'], fullname)
        self.assertEqual(response.data['phone'], phone)
        self.assertEqual(response.data['message'], message)
        self.assertEqual(response.data['subject'], subject)

    def test_update_contact(self):
        response = self.create()
        self.authenticate()
        
        url = reverse('update-contact-api',kwargs={'pk':response.data['id']})
        response = self.client.patch(url, {'answered':True})
        self.assertEqual(response.status_code, HTTP_200_OK)
        self.assertEqual(response.data['answered'], True)
        
    def test_delete_contac(self):
        response = self.create()
        self.authenticate()
        url = reverse('delete-contact-api', kwargs={'pk': response.data['id']})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, HTTP_204_NO_CONTENT)
        
    def test_detail_contact(self):
        id = self.create().data['id']
        self.authenticate()
        response = self.client.get(reverse('details-contact-api', kwargs={'pk':id}))
        self.assertEqual(response.status_code, HTTP_200_OK)
    