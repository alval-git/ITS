
from django import forms
from django.contrib import admin
from ckeditor_uploader.widgets import CKEditorUploadingWidget

from .models import Post, PostCategory, UserProfile, Subject


class PostAdminForm(forms.ModelForm):
    post_body = forms.CharField(label="Контент статьи", widget=CKEditorUploadingWidget())

    class Meta:
        model = Post
        fields = '__all__'


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    form = PostAdminForm
    prepopulated_fields = {"slug": ("title",)}


@admin.register(PostCategory)
class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name_of_category",)}


@admin.register(UserProfile)
class ProfileAdmin(admin.ModelAdmin):
    pass


@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name_of_subject",)}
