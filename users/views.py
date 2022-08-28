from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from .models import User


class UserView(APIView):
    def get(request, self, username):
        user = User.objects.get(username=username)
        data = UserSerializer(user).data
        return Response(data)
    

@api_view(['GET', 'POST'])
def UsersView(request):
    if request.method == 'GET':
        user = User.objects.all()
        data = UserSerializer(user, many=True).data
        return Response(data)

    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if(serializer.is_valid()): 
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

