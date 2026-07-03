from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import SignupSerializer,ProfileSerializer
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.generics import RetrieveUpdateAPIView
from .models import User

# Create your views here.
class UserRegisterView(generics.CreateAPIView):
    serializer_class = SignupSerializer
    permission_classes = [AllowAny]
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        serializer.save()

        return Response(
            {
                "message": "User registered successfully.",
            },
            status=status.HTTP_201_CREATED,
        )
    



class ProfileView(RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user