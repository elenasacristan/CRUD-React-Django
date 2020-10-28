from django.contrib import admin
from .models import Task, Tile

class TileAdmin(admin.ModelAdmin):
    list_display = ('tile_name','launch_date', 'status')
    search_fields = ('tile_name',)
    list_filter = ('status',)
    ordering = ('-launch_date',)

admin.site.register(Tile, TileAdmin)

class TaskAdmin(admin.ModelAdmin):
    list_display = ('title','type_task', 'tile')
    search_fields = ('title',)
    list_filter = ('type_task',)
    ordering = ('type_task','tile',)

admin.site.register(Task, TaskAdmin)

