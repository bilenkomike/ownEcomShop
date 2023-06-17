# Generated by Django 4.1.6 on 2023-03-21 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='%Y/%m/%d/%h-%i-%s')),
                ('alt', models.CharField(max_length=255, verbose_name='Alternative text')),
            ],
        ),
    ]
