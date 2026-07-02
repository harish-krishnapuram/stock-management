from django.db import models

# Create your models here.
class Product(models.Model):
    organization = models.ForeignKey(
        "organization.Organization",
        on_delete=models.CASCADE,
        related_name="products",
    )

    name = models.CharField(max_length=200)

    sku = models.CharField(max_length=50)

    description = models.TextField(blank=True)

    quantity = models.PositiveIntegerField(default=0)

    cost_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True,
    )

    selling_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True,
    )

    low_stock_threshold = models.PositiveIntegerField(
        null=True,
        blank=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["organization", "sku"],
                name="unique_sku_per_organization",
            )
        ]

    def __str__(self):
        return f"{self.name} ({self.sku})"