# Generated by Django 4.1.2 on 2023-01-12 10:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("subscription", "0003_alter_subscription_product_category"),
    ]

    operations = [
        migrations.RemoveField(model_name="subscription", name="fullname",),
    ]