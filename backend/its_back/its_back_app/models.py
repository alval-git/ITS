from django.db import models
import datetime
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
# Create your models here.


class Post(models.Model):
    CHOICES = (
        ('archive', 'Архив'),
        ('publicate', 'Опубликовать'),
    )
    slug = models.SlugField(unique=True, verbose_name="URL поста", max_length=50)
    title = models.CharField(max_length=100, verbose_name="Заголовок статьи")
    post_body = models.TextField(verbose_name="текст статьи")
    poster = models.ImageField(verbose_name='Постер поста', null=True)
    categories = models.ManyToManyField('PostCategory',  blank=True)
    short_description = models.CharField(max_length=200, verbose_name="Краткое описание", default="Без описания")
    publication_date = models.DateField(default=datetime.date.today())
    state = models.CharField(max_length=200, choices=CHOICES, verbose_name="Состояние статьи", default='archive')

    def __str__(self):
        return "{}".format(self.title)

class PostCategory(models.Model):
    slug = models.SlugField(unique=True, verbose_name="URL категории")
    name_of_category = models.CharField(max_length=50, verbose_name="Название категории")

    def __str__(self):
        return "{}".format(self.name_of_category)


class UserProfile(models.Model):
    CHOICES = (
        ('user', 'Пользователь'),
        ('student', 'Студент'),
        ('lecturer', 'Преподаватель')
    )
    photo = models.ImageField(blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user')
    about_user = models.TextField(default="Не указано")
    position = models.CharField(max_length=25, choices=CHOICES, default="user", verbose_name='Статус')

    @receiver(post_save, sender=User, dispatch_uid="create_profile")
    def create_profile(sender, instance, **kwargs):
        if kwargs["created"]:
            UserProfile.objects.create(user=instance)

    def __str__(self):
        return 'user: {}'.format(self.user.usersname)

    def get_absolute_url(self):
        return reverse("profile", kwargs=[{"pk": self.pk}])


class Subject(models.Model):
    slug = models.SlugField(verbose_name="URL предмета",)
    name_of_subject = models.CharField(max_length=50, verbose_name="Название предмета")
    description_of_subject = models.TextField(verbose_name="Описание предмета")
    lecturers = models.ManyToManyField(User, verbose_name="Преподаватели")

class UploadFiles(models.Model):
    slug = models.SlugField(verbose_name="URL  файла")
    file = models.FileField(verbose_name="загруженный файл")
    subject = models.ManyToManyField(Subject, blank=True, verbose_name="Предмет к которому относится файл")


