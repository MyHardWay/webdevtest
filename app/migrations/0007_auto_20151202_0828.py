# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_auto_20151202_0827'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automodel',
            name='name',
            field=models.CharField(unique=True, max_length=255, default='Lada'),
            preserve_default=False,
        ),
    ]
