from django.urls import path
from .api_views import PostApiView, CategoryApiView, PostDetailApiView, UserApiView, NewPostsApiView

urlpatterns = [
    path('posts/', PostApiView.as_view(), name="posts"),
    path('categories/', CategoryApiView.as_view(), name="categories"),
    path('posts/<str:slug>/', PostDetailApiView.as_view(), name="post_detail"),
    path('user/', UserApiView.as_view(), name="user_info"),
    path('new/posts/', NewPostsApiView.as_view(), name="new_posts")
    # path('subjects/', SubjectApiView.as_view(), 'subjects_list')
]
