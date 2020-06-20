from django.contrib import admin
from .models import User,UserProfile,Branch,Organisation
# Register your models here.
admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(Branch)
admin.site.register(Organisation)
