from django.db import models
from django.utils import timezone


class Tile(models.Model):
    STATUS_CHOICES =( 
    ("Live", "Live"), 
    ("Pending", "Pending"), 
    ("Archived", "Archived"), 
    )

    tile_name = models.CharField(max_length=200)
    launch_date = models.DateField(default=timezone.now)
    status = models.CharField(max_length=8, choices=STATUS_CHOICES, default='Pending')

    def __str__(self):
        return "{} - {}".format(self.launch_date, self.status)

class Task(models.Model):
    TYPE_CHOICES =( 
    ("Survey", "Survey"), 
    ("Discussion", "Discussion"), 
    ("Diary", "Diary"), 
    )
    
    title =  models.CharField(max_length=200)
    order = models.IntegerField()
    description = models.TextField()
    type_task = models.CharField(max_length=10, choices=TYPE_CHOICES, default='Survey')
    tile = models.ForeignKey(Tile, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.title