from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.AllPostsView.as_view()),
    path('<str:username>',views.UserPostsView),
    path('<str:username>/<int:number>',views.UserPostView),
]