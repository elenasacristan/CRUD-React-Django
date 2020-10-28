from rest_framework import viewsets
from .serializers import TaskSerializer, TileSerializer
from ..models import Task, Tile

class TaskViewSet(viewsets.ModelViewSet):
	queryset = Task.objects.all()
	serializer_class = TaskSerializer

class TileViewSet(viewsets.ModelViewSet):
    queryset = Tile.objects.all()
    serializer_class = TileSerializer