from django.shortcuts import render
from django.db.models import Sum, F
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import PrdSer,DashboardSerializer
from .models import Product
from rest_framework.viewsets import ReadOnlyModelViewSet
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

class DashboardAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):

        products = Product.objects.filter(
            organization=request.user.organization
        )

        total_products = products.count()

        total_stock = (
            products.aggregate(total=Sum("quantity"))["total"] or 0
        )

        total_inventory_cost = (
            products.aggregate(
                total=Sum(F("quantity") * F("cost_price"))
            )["total"] or 0
        )

        total_inventory_selling_value = (
            products.aggregate(
                total=Sum(F("quantity") * F("selling_price"))
            )["total"] or 0
        )

        low_stock_products = products.filter(
            quantity__lte=F("low_stock_threshold")
        ).count()

        data = {
            "total_products": total_products,
            "total_stock": total_stock,
            "low_stock_products": low_stock_products,
            "total_inventory_cost": total_inventory_cost,
            "total_inventory_selling_value": total_inventory_selling_value,
        }

        serializer = DashboardSerializer(data)

        return Response(serializer.data)
    
class LowStockProductViewSet(ReadOnlyModelViewSet):
    serializer_class = PrdSer
    def get_queryset(self):
        return Product.objects.filter(
            organization=self.request.user.organization,
            quantity__lte=F("low_stock_threshold")
        )