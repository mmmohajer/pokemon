from rest_framework import viewsets, permissions, response, status

from app.models import PokemonModel
from app.serializers import PokemonSerializer


class PokemonViewSet(viewsets.ModelViewSet):
    queryset = PokemonModel.objects.all()
    serializer_class = PokemonSerializer
    permission_classes = [permissions.AllowAny]
