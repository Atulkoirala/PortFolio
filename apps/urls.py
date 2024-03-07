from django.urls import path
from .views import *

urlpatterns = [
        path('key',KeystoneListView.as_view()),
        path('carosel',CaroselListView.as_view()),        
        path('courses',CoursesListView.as_view()),
        path('edu',EducationListView.as_view()),
        path('work',WorkedListView.as_view()),
        path('skill',SKillListView.as_view()),
        path('article',ArticleListView.as_view()),
        path('contact',ContactCreateView.as_view()),
        path('intrest',IntrestListView.as_view()),
        path('language',LanguageListView.as_view()),
]