# Generated by Django 4.1.2 on 2022-12-18 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("product", "0017_productattributevalues_qty_productselectedattributes"),
    ]

    operations = [
        migrations.RemoveField(model_name="productattributevalues", name="qty",),
        migrations.AddField(
            model_name="productselectedattributes",
            name="qty",
            field=models.IntegerField(default=0),
        ),
    ]
