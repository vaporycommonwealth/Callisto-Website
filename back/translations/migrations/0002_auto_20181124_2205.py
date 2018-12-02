# Generated by Django 2.1 on 2018-11-24 22:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('translations', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='LanguageTranslation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('translation', models.TextField(blank=True, default=None)),
                ('key', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='key', to='translations.TranslationKey')),
            ],
        ),
        migrations.RenameField(
            model_name='language',
            old_name='language',
            new_name='language_name',
        ),
        migrations.AddField(
            model_name='languagetranslation',
            name='language',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='language', to='translations.Language'),
        ),
    ]
