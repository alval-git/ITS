from ..models import Post, PostCategory, Subject,User
from .serializers import PostListSerializer,PostDetailSerializer, CategorySerializer, UserSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions


class PostApiView(ListAPIView):
    serializer_class = PostListSerializer
    queryset = Post.objects.filter(state='publicate').order_by('-publication_date').all()
    filter_fields = ('categories', )
    permission_classes = [permissions.IsAuthenticated]


class NewPostsApiView(ListAPIView):
    serializer_class = PostListSerializer
    queryset = Post.objects.filter(state='publicate').order_by('-publication_date')[0:3]
    permission_classes = [permissions.IsAuthenticated]


class PostDetailApiView(RetrieveAPIView):
    serializer_class = PostDetailSerializer
    queryset = Post.objects.filter(state='publicate').all()
    lookup_field = 'slug'
    permission_classes = [permissions.IsAuthenticated]


class CategoryApiView(ListAPIView):
    serializer_class = CategorySerializer
    queryset = PostCategory.objects.all()
    permission_classes = [permissions.AllowAny]


class UserApiView(RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        user = self.request.user
        obj = User.objects.get(username=user.username)
        return obj

