from typing import Generic
from django.shortcuts import render
from django.views import generic
from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework import filters
# from django.contrib.auth.mixins import LoginRequiredMixin


class CaroselListView(generics.ListAPIView):
    queryset = Carosel.objects.all()
    serializer_class = CaroselSerializers

class KeystoneListView(generics.ListAPIView):
    queryset = Keystone.objects.all()
    serializer_class = KeystoneSerializers

class CoursesListView(generics.ListAPIView):
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializers

class EducationListView(generics.ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializers

class WorkedListView(generics.ListAPIView):
    queryset = Worked.objects.all()
    serializer_class = WorkedSerializers

class SKillListView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SKillSerializers

class ArticleListView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializers

class IntrestListView(generics.ListAPIView):
    queryset = Intrest.objects.all()
    serializer_class = IntrestSerializers

class LanguageListView(generics.ListAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializers

class ContactCreateView(generics.CreateAPIView):
    serializer_class = ContactSerializers
