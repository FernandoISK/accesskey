from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='Schedule-Index'),
    path('addSchedule', views.add, name='Add-Shedule')
]