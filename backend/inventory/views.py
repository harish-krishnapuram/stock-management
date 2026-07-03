from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import PrdSer
from .models import Product
# Create your views here.

class ProductViewSet(ModelViewSet):
    serializer_class = PrdSer
    def get_queryset(self):
        return Product.objects.filter(
            organization=self.request.user.organization
        )

    def perform_create(self, serializer):
        print(self.request.user)
        print(type(self.request.user))
        serializer.save(
            organization=self.request.user.organization
        )
