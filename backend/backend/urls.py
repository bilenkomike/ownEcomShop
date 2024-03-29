from django.contrib import admin
from django.urls import path, include

# for media
from django.conf import settings
from django.conf.urls.static import static


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path("admin/", admin.site.urls),
    path("api/products/", include('product.urls')),
    path('api/currencies/', include('currencies.urls')),
    path('api/cart/', include('cart.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/account/', include('account.urls')),
    path('api/wishlist/', include('wishlist.urls')),
    path('api/orders/', include('order.urls')),
    path('api/delivery/', include('delivery.urls')),
    path('api/blog-categories/', include('blogcategories.urls')),
    path('api/blog-tags/', include('blogtags.urls')),
    path('api/posts/', include('post.urls')),
    path('api/comments/', include('comments.urls')),
    path('api/stores/', include('stores.urls')),
    path('api/contacts/', include('contacts.urls')),
    path('api/faq/', include('faq.urls')),
    path('api/subscription/', include('subscription.urls')),
    path('api/company-contacts/', include('companycontacts.urls')),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT) # for media