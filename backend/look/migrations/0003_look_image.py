# Generated by Django 4.1.2 on 2022-12-21 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("look", "0002_remove_look_products_look_products"),
    ]

    operations = [
        migrations.AddField(
            model_name="look",
            name="image",
            field=models.ImageField(
                blank=True, null=True, upload_to="looks/%Y-%m-%d/%H-%i-%s"
            ),
        ),
    ]
