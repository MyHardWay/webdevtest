# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_automodel_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automodel',
            name='name',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
