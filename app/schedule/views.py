from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'schedule/index.html')

def add(request):
    return render(request, 'schedule/addschedule.html')
