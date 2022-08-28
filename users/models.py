from django.db import models

class User(models.Model):
    username = models.CharField(max_length=10, unique=True)
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=30)

    def create(self, validated_data):
        return User.objects.create(**validated_data)
