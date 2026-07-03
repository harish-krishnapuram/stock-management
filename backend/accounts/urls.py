from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from . import views

urlpatterns = [
    path('login/',TokenObtainPairView.as_view(),name='login'),
    path('signup/',views.UserRegisterView.as_view(),name='signup'),
    path("profile/",views.ProfileView.as_view(),
    ),
]