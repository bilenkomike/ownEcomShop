# Generated by Django 4.1.2 on 2022-12-21 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("product", "0022_remove_productselectedattributes_attribute_and_more"),
        ("look", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(model_name="look", name="products",),
        migrations.AddField(
            model_name="look",
            name="products",
            field=models.ManyToManyField(to="product.product"),
        ),
    ]