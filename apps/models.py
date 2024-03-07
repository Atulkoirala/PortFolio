from django.db import models
from django.db.models.base import ModelState
from django.db.models.deletion import CASCADE
from django.db.models.fields import CharField
from django.utils import timezone
from django.core.exceptions import ValidationError
from django.contrib.postgres.fields import ArrayField
import os




def is_svg(file):
    """Return True if the file extension is .svg"""
    return os.path.splitext(file.name)[1] == '.svg'

def validate_svg(file):
    if not is_svg(file):
        raise ValidationError("File not svg")
    
def validate_pdf(value):
    ext = os.path.splitext(value.name)[1]  # get the file extension
    valid_extensions = ['.pdf']
    if not ext.lower() in valid_extensions:
        raise ValidationError('Unsupported file extension. Only PDF files are allowed.')
    

class Program_Language(models.Model):
    ids = models.IntegerField(unique= True,blank=False)
    Title = models.CharField(max_length=30,blank=False)
    Description = models.TextField(blank=False)
    Svg_Image = models.FileField(upload_to='plang',blank=False,validators=[validate_svg])

    def __str__(self):
        return self.Title

class Language(models.Model):
    ids = models.IntegerField(unique= True,blank=False)
    Title = models.CharField(max_length=30,blank=False)
    Description = models.TextField(blank=False)
    Svg_Image = models.FileField(upload_to='Lang',blank=False,validators=[validate_svg])

    def __str__(self):
        return self.Title


class Carosel(models.Model):
    A=(
        ('New','New'),
        ('Old','Old'),
    )
    ids = models.IntegerField(unique= True,blank=False)
    Title = models.CharField(max_length=20,blank=False)
    Description = models.TextField(blank=False)
    Homepage = models.CharField(max_length=7,choices=A,blank=False)
    Image = models.ImageField(upload_to='carosel',blank=False)
    time = models.DateTimeField(default=timezone.now,blank=False)

    def __str__(self):
        return self.Title
    
class Keystone(models.Model):
    A=(
        ('Completed','Completed'),
        ('Work Inprogess','Work Inprogess'),
    )
    ids = models.IntegerField(unique= True,blank=False)
    Title = models.CharField(max_length=30,blank=False)
    Description = models.TextField(blank=False)
    Github_link = models.URLField(max_length=90,blank=False)
    Image = models.ImageField(upload_to='Project',blank=True)
    Status = models.CharField(max_length=20,choices=A,blank=False)
    language = ArrayField(models.CharField(max_length=100))

    def __str__(self):
        return self.Title
    
class Courses(models.Model):
    ids = models.IntegerField(unique= True,blank=False)
    Title = models.CharField(max_length=30,blank=False)
    Description = models.TextField(blank=False)
    Certificate = models.ImageField(upload_to='Course',blank=False)
    Pfd = models.FileField(upload_to='Course',blank=False,validators=[validate_pdf])
    Date = models.DateField(default=timezone.now,blank=False)

    def __str__(self):
        return self.Title

class Education(models.Model):
    A=(
        ('Completed','Completed'),
        ('OnGoing','OnGoing'),
    )
    ids = models.IntegerField(unique= True,blank=False)
    Title = models.CharField(max_length=50,blank=False)
    College_Name = models.CharField(max_length=75,blank=False)
    Address = models.CharField(max_length=100,blank=False)
    Result = models.CharField(max_length=30,blank=False)
    Status = models.CharField(max_length=20,choices=A,blank=False)
    From = models.DateField(default=timezone.now,blank=False)
    To = models.DateField(default=timezone.now,blank=False)
    img = models.ImageField(upload_to='education',blank=False)


    def __str__(self):
        return self.Title

class Worked(models.Model):
    A=(
        ('Part Time','Part Time'),
        ('Full Time','Full Time'),
        ('Internship','Internship'),
    )
    B=(
        ('Working','Working'),
        ('left','left'),
    )
    ids = models.IntegerField(unique= True,blank=False)
    Title = models.CharField(max_length=30,blank=False)
    Address = models.CharField(max_length=30,blank=False)
    Company_Name = models.CharField(max_length=30,blank=False)
    Position = models.CharField(max_length=50,blank=False)
    From = models.DateField(default=timezone.now,blank=False)
    To = models.DateField(default=timezone.now,blank=False)
    img = models.ImageField(upload_to='work',blank=False)
    Job_Status = models.CharField(max_length=20,choices=A,blank=False)
    Status = models.CharField(max_length=20,choices=B,blank=False)

    def __str__(self):
        return self.Title
        
class Skill(models.Model):
    ids = models.IntegerField(unique= True,blank=False)
    Title = models.CharField(max_length=30,blank=False)
    Description = models.TextField(blank=False)
    Svg_Image = models.FileField(upload_to='Skill',blank=False,validators=[validate_svg])
    Image = models.ImageField(upload_to='Skill',blank=True)

    def __str__(self):
        return self.Title
    
class Article(models.Model):
    ids = models.IntegerField(unique= True,blank=False)
    Name = models.CharField(max_length=50,blank=False)
    Title = models.CharField(max_length=300,blank=False)
    Image = models.ImageField(upload_to='article',blank=False)
    Abstract = models.TextField(blank=False)
    Link = models.URLField(max_length=90,blank=False)
    Date = models.DateField(default=timezone.now,blank=False)

    def __str__(self):
        return self.Title

class Contact(models.Model):
    Name = models.CharField(max_length=50,blank=False)
    Email = models.EmailField(max_length=80,blank=False)
    Code = models.CharField(max_length=3,blank=False)
    Phone = models.CharField(max_length=10,blank=False)
    Subject = models.CharField(max_length=50,blank=False)
    Message = models.CharField(max_length=50,blank=False)
    time = models.DateTimeField(default=timezone.now,blank=False)

    def __str__(self):
        return self.Name
    
class Intrest(models.Model):
    ids = models.IntegerField(unique= True,blank=False)
    Name = models.CharField(max_length=30,blank=False)
    Svg_Image = models.FileField(upload_to='Skill',blank=False,validators=[validate_svg])

    def __str__(self):
        return self.Name