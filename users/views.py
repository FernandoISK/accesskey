from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def saludo(request):
    return HttpResponse("<h1>Hola Mundo</h1>")
def index(request):
    return render(request, 'user/index.html')