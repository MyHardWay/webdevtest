# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_automodel_author'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automodel',
            name='author',
        ),
    ]
