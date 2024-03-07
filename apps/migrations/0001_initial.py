# Generated by Django 4.1.7 on 2023-04-10 22:42

import apps.models
import django.contrib.postgres.fields
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ids', models.IntegerField(unique=True)),
                ('Title', models.CharField(max_length=30)),
                ('Abstract', models.TextField()),
                ('Link', models.URLField(max_length=90)),
                ('Date', models.DateField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Carosel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ids', models.IntegerField(unique=True)),
                ('Title', models.CharField(max_length=20)),
                ('Description', models.TextField()),
                ('Homepage', models.CharField(choices=[('New', 'New'), ('Old', 'Old')], max_length=7)),
                ('Image', models.ImageField(upload_to='media/carosel')),
                ('time', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
                ('Email', models.EmailField(max_length=80)),
                ('Code', models.CharField(max_length=3)),
                ('Phone', models.CharField(max_length=10)),
                ('Subject', models.CharField(max_length=50)),
                ('Message', models.CharField(max_length=50)),
                ('time', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Courses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ids', models.IntegerField(unique=True)),
                ('Title', models.CharField(max_length=30)),
                ('Description', models.TextField()),
                ('Certificate', models.ImageField(upload_to='media/Course')),
                ('Pfd', models.FileField(upload_to='media/Skill', validators=[apps.models.validate_pdf])),
                ('Date', models.DateField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ids', models.IntegerField(unique=True)),
                ('Title', models.CharField(max_length=50)),
                ('College_Name', models.CharField(max_length=75)),
                ('Address', models.CharField(max_length=100)),
                ('Result', models.CharField(max_length=30)),
                ('Status', models.CharField(choices=[('Completed', 'Completed'), ('OnGoing', 'OnGoing')], max_length=20)),
                ('From', models.DateField(default=django.utils.timezone.now)),
                ('To', models.DateField(default=django.utils.timezone.now)),
                ('img', models.ImageField(upload_to='media/education')),
            ],
        ),
        migrations.CreateModel(
            name='Intrest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ids', models.IntegerField(unique=True)),
                ('Name', models.CharField(max_length=30)),
                ('Svg_Image', models.FileField(upload_to='media/Skill', validators=[apps.models.validate_svg])),
            ],
        ),
        migrations.CreateModel(
            name='Keystone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ids', models.IntegerField(unique=True)),
                ('Title', models.CharField(max_length=30)),
                ('Description', models.TextField()),
                ('Github_link', models.URLField(max_length=90)),
                ('Image', models.ImageField(upload_to='media/Project')),
                ('Status', models.CharField(choices=[('Completed', 'Completed'), ('Work Inprogess', 'Work Inprogess')], max_length=20)),
                ('language', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=100), size=None)),
            ],
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ids', models.IntegerField(unique=True)),
                ('Title', models.CharField(max_length=30)),
                ('Description', models.TextField()),
                ('Svg_Image', models.FileField(upload_to='media/Skill', validators=[apps.models.validate_svg])),
            ],
        ),
        migrations.CreateModel(
            name='Program_Language',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ids', models.IntegerField(unique=True)),
                ('Title', models.CharField(max_length=30)),
                ('Description', models.TextField()),
                ('Svg_Image', models.FileField(upload_to='media/Skill', validators=[apps.models.validate_svg])),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ids', models.IntegerField(unique=True)),
                ('Title', models.CharField(max_length=30)),
                ('Description', models.TextField()),
                ('Svg_Image', models.FileField(upload_to='media/Skill', validators=[apps.models.validate_svg])),
                ('Image', models.ImageField(upload_to='media/Skill')),
            ],
        ),
        migrations.CreateModel(
            name='Worked',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ids', models.IntegerField(unique=True)),
                ('Title', models.CharField(max_length=30)),
                ('Address', models.CharField(max_length=30)),
                ('Company_Name', models.CharField(max_length=30)),
                ('Position', models.CharField(max_length=50)),
                ('From', models.DateField(default=django.utils.timezone.now)),
                ('To', models.DateField(default=django.utils.timezone.now)),
                ('img', models.ImageField(upload_to='media/work')),
                ('Job_Status', models.CharField(choices=[('Part Time', 'Part Time'), ('Full Time', 'Full Time'), ('Internship', 'Internship')], max_length=20)),
                ('Status', models.CharField(choices=[('Working', 'Working'), ('left', 'left')], max_length=20)),
            ],
        ),
    ]