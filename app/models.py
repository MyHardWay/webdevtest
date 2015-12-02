from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class AutoModel(models.Model):
    name = models.CharField(max_length=255, unique=True, null=False, blank=False)
    author = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)

    class Meta:
        ordering = ['name']

    def __unicode__(self):
        return '%s' % (self.name)