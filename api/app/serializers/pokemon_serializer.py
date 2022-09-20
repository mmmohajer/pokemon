from rest_framework import serializers

from app.models import PokemonModel


class PokemonSerializer(serializers.ModelSerializer):

    class Meta:
        model = PokemonModel
        fields = ['id', 'uuid', 'name', 'types', 'image_url', 'created_at', 'updated_at']
