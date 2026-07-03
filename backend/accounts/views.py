from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import SignupSerializer
from rest_framework.permissions import AllowAny


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