from django.urls import path
from . import views

urlpatterns =[
    path('', views.index ,name='All-Device')
]