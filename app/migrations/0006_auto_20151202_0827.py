# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20151202_0608'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automodel',
            name='name',
            field=models.CharField(null=True, unique=True, max_length=255),
        ),
    ]
