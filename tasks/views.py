from rest_framework import viewsets
from .serializers import TaskSerializer
from .models import Task

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer 
    """La línea serializer_class = TaskSerializer en una vista de DRF (Django REST Framework) define qué serializador debe usar la vista para convertir datos entre JSON (o otros formatos) y objetos de Django (modelos). Esencialmente, le dice a DRF:"""
    queryset = Task.objects.all()
