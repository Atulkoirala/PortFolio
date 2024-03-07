from django.db.models import fields
from .models import *
from rest_framework import serializers


class ListField(serializers.Field):
    def to_representation(self, value):
        if isinstance(value, str):
            return value.split(',')
        elif isinstance(value, list):
            return value
        return []
    

class CaroselSerializers(serializers.ModelSerializer):
    class Meta:
        model = Carosel
        fields = '__all__'

class KeystoneSerializers(serializers.ModelSerializer):
    language = ListField()

    class Meta:
        model = Keystone
        fields = '__all__'

class CoursesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Courses
        fields = '__all__'

class EducationSerializers(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class WorkedSerializers(serializers.ModelSerializer):
    class Meta:
        model = Worked
        fields = '__all__'

class SKillSerializers(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class ArticleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'

class IntrestSerializers(serializers.ModelSerializer):
    class Meta:
        model = Intrest
        fields = '__all__'

class LanguageSerializers(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'

class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'