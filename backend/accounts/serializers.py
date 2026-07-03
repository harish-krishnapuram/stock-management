from rest_framework import serializers
from .models import User
from organization.models import Organization


class SignupSerializer(serializers.ModelSerializer):
    organization_name = serializers.CharField(write_only=True)

    confirm_password = serializers.CharField(
        write_only=True,
        style={"input_type": "password"},
    )

    password = serializers.CharField(
        write_only=True,
        style={"input_type": "password"},
    )

    class Meta:
        model = User

        fields = [
            "organization_name",
            "username",
            "email",
            "password",
            "confirm_password",
        ]
    def create(self, validated_data):
        password = validated_data.pop("password")
        validated_data.pop("confirm_password")

        organization_name = validated_data.pop("organization_name")

        organization = Organization.objects.create(
            name=organization_name
        )

        user = User.objects.create_user(
            organization=organization,
            password=password,
            **validated_data
        )

        return user
    
from rest_framework import serializers
from .models import User

class ProfileSerializer(serializers.ModelSerializer):

    organization = serializers.CharField(
        source="organization.name",
        read_only=True
    )

    class Meta:
        model = User

        fields = [
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "organization",
        ]
        read_only_fields = [
            "username",
            "organization",
        ]