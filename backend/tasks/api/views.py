from rest_framework import viewsets
from .serializers import TaskSerializer, TileSerializer
from ..models import Task, Tile

class TaskViewSet(viewsets.ModelViewSet):
	queryset = Task.objects.all().order_by('order')
	serializer_class = TaskSerializer

class TileViewSet(viewsets.ModelViewSet):
    queryset = Tile.objects.all().order_by('-launch_date')
    serializer_class = TileSerializer