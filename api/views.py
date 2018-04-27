from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets
from django.contrib.auth.models import User
from api.serializers import UserSerializer
from api.serializers import AccountSerializer
from api.serializers import BanksSerializer
from api.serializers import OperationsSerializer
from api.models import Account
from api.models import Bank
from api.models import Operation


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class AccountViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Account.objects.all()
    serializer_class = AccountSerializer


class BankViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Bank.objects.all()
    serializer_class = BanksSerializer


class OperationViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Operation.objects.all()
    serializer_class = OperationsSerializer
