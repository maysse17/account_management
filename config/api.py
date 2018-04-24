from rest_framework import routers
from api import views


# Settings
api = routers.DefaultRouter()
api.trailing_slash = '/?'

api.register(r'snippets', views.SnippetViewSet)
api.register(r'users', views.UserViewSet)


