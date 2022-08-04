from rest_framework import serializers
from ..models import Post, PostCategory, User


class CategorySerializer(serializers.Serializer):
    id = serializers.PrimaryKeyRelatedField(many=False,read_only=True)
    slug = serializers.SlugField(required=True)
    name_of_category = serializers.CharField(read_only=True)

    class Meta:
        model = PostCategory
        fields = ['id', 'slug', 'name_of_category']


class PostListSerializer(serializers.Serializer):
    slug = serializers.SlugField(required=True)
    title = serializers.CharField(read_only=True)
    poster = serializers.ImageField(read_only=True)
    categories = CategorySerializer(many=True, read_only=True)
    short_description = serializers.CharField(read_only=True)
    publication_date = serializers.DateField()
    class Meta:
        model = Post
        fields = ['slug', 'title', 'categories', 'poster', 'post_body', 'publication_date']


class PostDetailSerializer(serializers.Serializer):
    slug = serializers.SlugField(required=True)
    title = serializers.CharField(read_only=True)
    poster = serializers.ImageField(read_only=True)
    categories = CategorySerializer(many=True, read_only=True)
    post_body = serializers.CharField(read_only=True)
    short_description = serializers.CharField(read_only=True)
    publication_date = serializers.DateField()

    class Meta:
        model = Post
        fields = ['slug', 'title', 'categories', 'poster', 'post_body', 'publication_date']


class UserSerializer(serializers.Serializer):
    username = serializers.CharField()

    class Meta:
        model = User
        fields = ['username']


# class SubjectSerializer(serializers.Serializer):
#     slug = serializers.SlugField(required=True)
#     name_of_subject = serializers.CharField(required=True)
#     descriptions_of_subject = serializers.CharField(required=True)
#
#     class Meta:
#         model = Subject
#         fields = ['slug', 'name_of_subject', 'descriptions_of_subject']


