from django.urls import path
from .views import (
     ProductListView, 
     ProductDetailView,
     ProductCreateViewSet,
     ProductDeleteViewSet,
     ProductUpdateViewSet,
     ProductTypesView,
     ProductCategoryView,
     ProductSubCategoryView,
     ProductAttributesView,
     ProductBrandsViewSet,
     ProductPricesViewSet,
     ProductDetailsUpdateViewSet,
     ProductDetailReviewView,
     ProductsNewArrivalsViewSet
)

urlpatterns = [     
     path('', ProductListView.as_view(), name="api-products-list"),
     path('<int:pk>/', ProductDetailView.as_view(), name="api-products-detail"),
     path('<int:pk>/reviews/', ProductDetailReviewView.as_view(), name="api-products-detail-reviews"),
     path('create/', ProductCreateViewSet.as_view({'post':'create'}), name="api-products-create"),
     path('<int:pk>/delete/', ProductDeleteViewSet.as_view(), name="delete-product-api"),
     path('<int:pk>/update/', ProductUpdateViewSet.as_view(), name="delete-update-api"),
     path('<int:pk>/details/update', ProductDetailsUpdateViewSet.as_view(), name="update-product-details"),
     
     path('new-arrivals/', ProductsNewArrivalsViewSet.as_view(), name='new-arivals-api'),
     path('types/', ProductTypesView.as_view(), name="product-types-api"),
     path('categories/',ProductCategoryView.as_view(), name="product-categories-api"),
     path('subcategories/',ProductSubCategoryView.as_view(), name="product-subcategories-api"),
     path('attributes/', ProductAttributesView.as_view(), name="product-atrributes-api"),
     path('brands/', ProductBrandsViewSet.as_view(), name="proucts-brand-api"),
     path('maxprices/<str:pk>/', ProductPricesViewSet.as_view(), name="proucts-price-api"),
]
