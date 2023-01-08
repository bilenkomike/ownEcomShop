# Generated by Django 4.1.2 on 2022-12-22 10:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import order.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("shipping", "0002_alter_shipping_phone"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("product", "0022_remove_productselectedattributes_attribute_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Order",
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
                (
                    "status",
                    models.IntegerField(
                        choices=[(0, "Canceled"), (1, "Inprogress"), (2, "Success")]
                    ),
                ),
                (
                    "order_no",
                    models.CharField(
                        default=order.models.articul_number,
                        editable=False,
                        max_length=20,
                    ),
                ),
                ("notify", models.BooleanField(default=False)),
                ("paid", models.BooleanField(default=False)),
                (
                    "shipping_method",
                    models.IntegerField(
                        choices=[
                            (0, "Courier"),
                            (1, "Pickupfromstor"),
                            (2, "Ups"),
                            (3, "Pickupfromstorcustom"),
                            (4, "Ge"),
                        ]
                    ),
                ),
                ("additional", models.TextField(blank=True, null=True)),
                (
                    "shipping",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        to="shipping.shipping",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="OrderItem",
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
                (
                    "order",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="order.order"
                    ),
                ),
                (
                    "product",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="product.product",
                    ),
                ),
                (
                    "selected_attributes",
                    models.ManyToManyField(to="product.productattributevalues"),
                ),
            ],
        ),
    ]