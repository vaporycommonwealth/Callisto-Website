# Generated by Django 2.1.3 on 2018-11-11 20:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wallets', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='wallet',
            name='cold_staking',
            field=models.BooleanField(default=False),
        ),
    ]
