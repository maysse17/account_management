from rest_framework import serializers
from api.models import Account
from api.models import Operation
from api.models import Bank
from django.contrib.auth.models import User


class AccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'accounts')


class OperationsSerializer(serializers.HyperlinkedModelSerializer):
    account = serializers.ReadOnlyField(source='account.title')

    class Meta:
        model = Operation
        fields = '__all__'


class BanksSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Bank
        fields = '__all__'
