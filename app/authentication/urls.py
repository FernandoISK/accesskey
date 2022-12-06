from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login, name='Login'),
    path('authen',views.Authen, name='authen')
]