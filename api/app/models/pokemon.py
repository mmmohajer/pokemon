from django.db import models
from django.contrib.postgres.fields import ArrayField

from core.models.general import TimeStampedUUIDModel


class Pokemon(TimeStampedUUIDModel):
    name = models.CharField(max_length=12, unique=True)
    types = ArrayField(models.CharField(max_length=255), blank=True, null=True)
    image_url = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Pokemons"
        ordering = ('name', 'types')
