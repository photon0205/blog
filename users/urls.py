from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.UsersView),
    path('<str:username>',views.UserView.as_view()),
]