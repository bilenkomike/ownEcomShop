from rest_framework import serializers

from .models import Post
from comments.models import Comment
from comments.serializers import CommentSerializer
from blogtags.serializers import BlogTagSerializer
from blogcategories.serializers import BlogCategorySerializer



class PostSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField()
    tags = BlogTagSerializer(many=True, read_only=True)
    category = BlogCategorySerializer(many=False, read_only=True)
        
    class Meta:
        model = Post
        fields = '__all__'
        

    def get_comments(self,obj):
        comments = obj.comment_set.all()
        serializer = CommentSerializer(comments, many=True)
        return serializer.data