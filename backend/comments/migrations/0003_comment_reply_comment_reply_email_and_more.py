# Generated by Django 4.1.2 on 2023-01-11 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("comments", "0002_alter_comment_user"),
    ]

    operations = [
        migrations.AddField(
            model_name="comment",
            name="reply",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="comment",
            name="reply_email",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name="comment",
            name="reply_fullname",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
