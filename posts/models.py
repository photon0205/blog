from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=1000)
    author = models.CharField(max_length=30)
    publish_time = models.DateTimeField(auto_now_add=True)
    number = models.IntegerField()

    def create(self, validated_data):
        return Post.objects.create(**validated_data)