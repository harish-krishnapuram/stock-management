from rest_framework import serializers
from .models import Product


class PrdSer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "sku",
            "description",
            "quantity",
            "cost_price",
            "selling_price",
            "low_stock_threshold",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "created_at",
            "updated_at",
        ]
    def validate_quantity(self, value):
        if value < 0:
            raise serializers.ValidationError(
                "Quantity cannot be negative."
            )
        return value

    def validate_cost_price(self, value):
        if value <= 0:
            raise serializers.ValidationError(
                "Cost price must be greater than zero."
            )
        return value

    def validate_selling_price(self, value):
        if value <= 0:
            raise serializers.ValidationError(
                "Selling price must be greater than zero."
            )
        return value
    

class DashboardSerializer(serializers.Serializer):
    total_products = serializers.IntegerField()
    total_stock = serializers.IntegerField()
    low_stock_products = serializers.IntegerField()
    total_inventory_cost = serializers.DecimalField(
        max_digits=15,
        decimal_places=2
    )
    total_inventory_selling_value = serializers.DecimalField(
        max_digits=15,
        decimal_places=2
    )