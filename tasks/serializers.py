from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #fields = ('id', 'title', 'description', 'done')

        # Si tenemos muchos archivos utilizamos el siguiente codigo
        # If we have many files we use the following code
        fields = '__all__'