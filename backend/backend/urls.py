from django.contrib import admin
from django.urls import path, include

# for media
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path("admin/", admin.site.urls),
    path("api/products/", include('product.urls')),
    path('api/currencies/', include('currencies.urls')),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT) # for media