# Generated by Django 4.1.2 on 2022-12-23 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("order", "0002_alter_order_status"),
    ]

    operations = [
        migrations.AddField(
            model_name="orderitem", name="qty", field=models.IntegerField(default=1),
        ),
    ]