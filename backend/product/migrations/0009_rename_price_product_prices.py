# Generated by Django 4.1.2 on 2022-12-17 13:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("product", "0008_product_price"),
    ]

    operations = [
        migrations.RenameField(
            model_name="product", old_name="price", new_name="prices",
        ),
    ]