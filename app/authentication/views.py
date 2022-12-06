from django.shortcuts import render
from .forms import UserForm
import requests

# Create your views here.
def login(request):
    return render(request,'authentication/login.html' )

def Authen(request):
    url = 'http://apiaccesskey.somee.com/api/Login/Login?usuario=mching&&pass=123'
    response = requests.get(url)
    print(response.content)
    return render(request,'authentication/login.html' )
