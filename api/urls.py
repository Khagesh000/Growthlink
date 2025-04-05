from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, SkillViewSet, ProjectViewSet, ContactMessageViewSet, contact_form

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'contact', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('contact-form/', contact_form, name='contact-form'),
]
