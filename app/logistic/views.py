from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'logistic/home.html')

def myschedule(request):
    return render(request, 'logistic/myschedule.html')

def access(request):
    return render(request,'logistic/access.html')

def logs(request):
    return render(request, 'logistic/logs')
