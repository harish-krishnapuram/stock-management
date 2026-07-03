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