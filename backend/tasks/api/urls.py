from .views import TaskViewSet, TileViewSet
from rest_framework import routers
from django.urls import path, include


router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)
router.register(r'tiles', TileViewSet)

urlpatterns = [
    path('', include(router.urls))
]
