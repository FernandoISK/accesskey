from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='Home'),
    path('myschedule', views.myschedule, name='My-Shedule'),
    path('access',views.access, name='Access'),
    path('logs', views.logs,name='Logs')
]