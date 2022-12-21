# Generated by Django 4.1.2 on 2022-12-18 10:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("product", "0014_alter_product_rating_alter_product_views"),
    ]

    operations = [
        migrations.CreateModel(
            name="ProductAttribute",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("attribute", models.CharField(max_length=150, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="ProductAttributeValues",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("value", models.CharField(max_length=100)),
                (
                    "attribute",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="product.productattribute",
                    ),
                ),
            ],
        ),
    ]