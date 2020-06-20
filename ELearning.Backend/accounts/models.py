import uuid
import datetime
from datetime import timedelta

from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.core.exceptions import ObjectDoesNotExist
from django.utils import timezone
from django.contrib.auth.tokens import default_token_generator
from .utils import generate_activation_key





class Organisation(models.Model):
    organisation_id = models.PositiveIntegerField(primary_key=True)
    organisation_name  = models.CharField(max_length=100,null=False,unique=True)

    def __str__(self):
        return self.organisation_name


class Branch(models.Model):
    Organisation = models.ForeignKey(Organisation, on_delete=models.CASCADE)
    branch_id = models.PositiveIntegerField(primary_key=True)
    branch_name = models.CharField(max_length=100,null=False)

    def __str__(self):
        return self.branch_name

class UserManager(BaseUserManager):
    '''
    creating a manager for a custom user model
    https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#writing-a-manager-for-a-custom-user-model
    '''
    def create_user(self, email, password=None):
        """
        Create and return a `User` with an email, username and password.
        """
        if not email:
            raise ValueError('Users Must Have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )
        user.set_password(password)
        # user.activation_key = generate_activation_key()
        # user.key_expires=datetime.datetime.strftime(datetime.datetime.now() + datetime.timedelta(days=2), "%Y-%m-%d %H:%M:%S")
        #
        # send_activation_email(user,site='elearn')
        user.is_active = False
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if not email:
            raise ValueError('Users Must Have an email address')


        if password is None:
            raise TypeError('Superusers must have a password.')

        user = self.model(email=self.normalize_email(email),)

        user.set_password(password)
        user.is_active = True
        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)

        return user




class User(AbstractBaseUser):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True
        )
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    # Tells Django that the UserManager class defined above should manage
    # objects of this type.
    objects = UserManager()

    def __str__(self):
        return self.email


    def has_perm(self, perm, obj=None):
        return self.is_superuser

	# Does this user have permission to view this app? (ALWAYS YES FOR SIMPLICITY)
    def has_module_perms(self, app_label):
        return True








class UserProfile(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')

    branch = models.ForeignKey(Branch,on_delete=models.CASCADE)

    first_name = models.CharField(max_length=50, unique=False)
    last_name = models.CharField(max_length=50, unique=False)
    phone_number = models.CharField(max_length=10, unique=True, null=False, blank=False)
    age = models.PositiveIntegerField(null=False, blank=False)
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    def __str__(self):
        return self.user.email
