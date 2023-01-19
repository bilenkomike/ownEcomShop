from django.test import TestCase
from .models import FAQ
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT
from django.contrib.auth.models import User
from shipping.models import Shipping

class FAQTest(TestCase):
    def test_faq(self):
        question = 'Lorem question'
        answer = 'some answer from our store'
        
        faq = FAQ.objects.create(question=question, answer=answer)
        self.assertEqual(faq.question,question)
        self.assertEqual(faq.answer, answer)



class TestAPIFAQ(APITestCase):
    def authenticate(self):
        user = User.objects.create_superuser(username="someemail@gmail.com",email="someemail@gmail.com", password="Myroslav_2023")
        Shipping.objects.create(user=user,phone='', country='', city='', zip='',address='')
        response = self.client.post(reverse('login'), {"username":user.email, "password":'Myroslav_2023'})
        self.client.credentials(HTTP_AUTHORIZATION=f"Bearer {response.data['token']}")
        
    def test_faq_enpoint(self):
        response = self.client.get('/api/faq/')
        self.assertEqual(response.status_code, HTTP_200_OK)
    
    def test_create_faq(self):
        self.authenticate()
        question = "create new question"
        answer = 'some answer'
        response = self.client.post(reverse('faq-create-api'), {"question":question, 'answer':answer})
        self.assertEqual(response.status_code, HTTP_201_CREATED)
        self.assertEqual(response.data['question'], question)
        self.assertEqual(response.data['answer'], answer)
        
    def test_delete_faq(self):
        self.authenticate()
        question = "create new question"
        answer = 'some answer'
        response = self.client.post(reverse('faq-create-api'), {"question":question, 'answer':answer})
        self.assertEqual(response.status_code, HTTP_201_CREATED)
        
        url = reverse('delet-faq-view', kwargs={'pk': response.data['id']})
        response1 = self.client.delete(url)
        self.assertEqual(response1.status_code, HTTP_204_NO_CONTENT)
        
        
    def test_update_faq(self):
        self.authenticate()
        question = "create new question"
        answer = 'some answer'
        response = self.client.post(reverse('faq-create-api'), {"question":question, 'answer':answer})
        self.assertEqual(response.status_code, HTTP_201_CREATED)
        new_question = "another new question"
        
        url = reverse('update-faq-api', kwargs={'pk': response.data['id']})
        response1 = self.client.patch(url, data={"question":new_question})
        self.assertEqual(response1.status_code, HTTP_200_OK)
        self.assertEqual(response1.data['question'],new_question)