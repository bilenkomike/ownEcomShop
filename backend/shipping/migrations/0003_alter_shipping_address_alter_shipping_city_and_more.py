# Generated by Django 4.1.2 on 2023-01-18 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shipping', '0002_alter_shipping_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shipping',
            name='address',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='shipping',
            name='city',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='shipping',
            name='country',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='shipping',
            name='phone',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='shipping',
            name='zip',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
