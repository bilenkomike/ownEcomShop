from django.contrib import admin

from .models import (Product, 
    ProductSubCategory,
    ProductCategory,
    ProductsType,
    ProductDetails,
    LookComplete,
    ProductPrices,
    ProductReview,
    ProductAttribute,
    ProductAttributeValues,
    ProductSelectedAttributes,
    ProductBrand
)


class ProductSubCategoryAdmin(admin.ModelAdmin):
    list_display = ['name','category']
    list_display_links = ['name']


admin.site.register(Product)
admin.site.register(ProductSubCategory,ProductSubCategoryAdmin)
admin.site.register(ProductCategory)
admin.site.register(ProductsType)
admin.site.register(ProductDetails)
admin.site.register(LookComplete)
admin.site.register(ProductPrices)
admin.site.register(ProductReview)
admin.site.register(ProductAttribute)
admin.site.register(ProductAttributeValues)
admin.site.register(ProductSelectedAttributes)
admin.site.register(ProductBrand)