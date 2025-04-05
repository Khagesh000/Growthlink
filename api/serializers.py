from rest_framework import serializers
from .models import Profile, Skill, Project, ContactMessage

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'  # or list them manually if you prefer

    def create(self, validated_data):
        # This ensures profile_image is handled correctly if it's a file
        return Profile.objects.create(**validated_data)

      

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'
