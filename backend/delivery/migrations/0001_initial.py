# Generated by Django 4.1.2 on 2022-12-22 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Delivery",
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
                        choices=[
                            (0, "Orderplaced"),
                            (1, "Documentationprepared"),
                            (2, "Bookingarranged"),
                            (3, "Collected"),
                            (4, "Intransittodestination"),
                            (5, "Arrivedatdestination"),
                            (6, "Outfordelivery"),
                            (7, "Delivered"),
                        ],
                        default=0,
                    ),
                ),
                ("location", models.CharField(max_length=255)),
                ("datetime", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
