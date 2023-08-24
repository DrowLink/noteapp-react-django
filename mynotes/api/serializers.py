from rest_framework.serializers import ModelSerializer
from .models import Note

# instead of upload ['body', 'etc', 'etc'], __all__ will do it for you auto
class NoteSerializer(ModelSerializer):
    class Meta:
        model =  Note
        fields = '__all__' 
