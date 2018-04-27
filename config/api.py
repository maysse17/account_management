from rest_framework import routers
from api import views


# Settings
api = routers.DefaultRouter()
api.trailing_slash = '/?'

api.register(r'accounts', views.AccountViewSet)
api.register(r'users', views.UserViewSet)
api.register(r'operations', views.OperationViewSet)
api.register(r'banks', views.BankViewSet)


