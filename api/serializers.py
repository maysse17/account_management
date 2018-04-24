from rest_framework import serializers
from api.models import BANK_LIST, DEVICE_LIST
from api.models import Account
from django.contrib.auth.models import User


class AccountSerializer(serializers.Serializer):
    class Meta:
        model = Account


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'id', 'username')
