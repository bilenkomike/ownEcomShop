from rest_framework import serializers
from .models import BlogCategory
# from post.serializers import PostSerializer


class BlogCategorySerializer(serializers.ModelSerializer):
    
    # posts = serializers.SerializerMethodField()
    posts_count = serializers.SerializerMethodField()
    
    class Meta: 
        model = BlogCategory
        fields = "__all__"
        
    # def get_posts(self, obj):
    #     posts = obj.post_set.all()
    #     serializer = PostSerializer(posts, many=True)
        
    #     return serializer.data
        
    def get_posts_count(self, obj):
        posts = obj.post_set.all()
        return len(posts)
    
    
class SingleCategorySerializer(serializers.ModelSerializer):
    class Meta: 
        model = BlogCategory
        fields = "__all__"