# Generated by Django 4.1.2 on 2023-01-12 10:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("product", "0025_alter_product_category"),
        ("subscription", "0002_subscription_fall_quite"),
    ]

    operations = [
        migrations.AlterField(
            model_name="subscription",
            name="product_category",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="product.productstype",
            ),
        ),
    ]
