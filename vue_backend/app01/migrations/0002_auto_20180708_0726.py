# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2018-07-08 07:26
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app01', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='m_content',
            new_name='markedcontent',
        ),
    ]