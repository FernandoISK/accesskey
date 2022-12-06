from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='Lab-Index'),
    path('addLaboratories', views.add, name='Add-Lab')
]