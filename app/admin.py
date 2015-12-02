from django.contrib import admin

# Register your models here.
from app.models import AutoModel


class AutoAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        if getattr(obj, 'author', None) is None:
            obj.author = request.user
        obj.save()
        
admin.site.register(AutoModel, AutoAdmin)