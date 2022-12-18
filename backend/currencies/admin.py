from django.contrib import admin

from .models import  Currency




class CurrencyAdmin(admin.ModelAdmin):
    # def image_tag(self):
    #     from django.utils.html import escape
    #     return u'<img src="%s" />'

    list_display = ['currency', 'symbol']


admin.site.register(Currency)


