from urllib.request import Request
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import PostSerializer
from .models import Post


@api_view(['GET', 'POST'])
def UserPostsView(request, username):
    if request.method == 'GET':
        post = Post.objects.filter(author=username)
        data = PostSerializer(post, many=True).data
        return Response(data)
    if request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if(serializer.is_valid()): 
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class AllPostsView(APIView):
    def get(request, self):
        post = Post.objects.all()
        data = PostSerializer(post, many=True).data
        return Response(data)

@api_view(['GET'])
def UserPostView(request, username, number):
    if request.method == 'GET':
        post = Post.objects.filter(author=username, number=number)
        data = PostSerializer(post, many=True).data
        return Response(data)

    


