from django.contrib import admin
from portfolio import views
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path("",views.index,name="index"),
    path("resume",views.resume,name='resume')
]
