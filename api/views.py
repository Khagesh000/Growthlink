from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth.models import User

from .models import Profile, Skill, Project, ContactMessage
from .serializers import ProfileSerializer, SkillSerializer, ProjectSerializer, ContactMessageSerializer

import logging
logger = logging.getLogger(__name__)

# Profile ViewSet
class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        logger.info(f"[Profile Create] Request data: {self.request.data}")
        dummy_user = User.objects.first()
        if not dummy_user:
            dummy_user = User.objects.create(username='dummyuser')
        serializer.save(user=dummy_user)


# Skill ViewSet
class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = [AllowAny]

# Project ViewSet
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]

# ContactMessage ViewSet
class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]

# Contact Form API (custom endpoint)
@api_view(['POST'])
def contact_form(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        send_mail(
            subject=f"New Message from {serializer.validated_data['name']}",
            message=serializer.validated_data['message'],
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.ADMIN_EMAIL],
        )
        return Response({'message': 'Message sent successfully'}, status=200)
    return Response(serializer.errors, status=400)
