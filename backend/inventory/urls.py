from django.urls import path
from . import views

low_stock_list = views.LowStockProductViewSet.as_view({
    "get": "list"
})
urlpatterns = [
    path('products/',views.ProductViewSet.as_view({
        'get': 'list',
        'post': 'create',
    })),
    path('products/<int:pk>/',views.ProductViewSet.as_view({
        'get':'retrieve',
        'delete':'destroy',
        'put':'update',
    })),
    path("dashboard/", views.DashboardAPIView.as_view()),
    path(
        "low-stock/",
        low_stock_list,
        name="low-stock-products"
    ),
]
