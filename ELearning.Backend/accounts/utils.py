import datetime
import hashlib
from django.conf import settings
from django.utils import timezone
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail import EmailMessage
from django.contrib.auth.tokens import default_token_generator
from rest_framework_jwt.settings import api_settings

expire_delta             = api_settings.JWT_REFRESH_EXPIRATION_DELTA


from django.utils.crypto import get_random_string

def generate_activation_key():
    chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)'
    secret_key = get_random_string(20, chars)
    return hashlib.sha256((secret_key).encode('utf-8')).hexdigest()




def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': user,
        'expires': timezone.now() + expire_delta - datetime.timedelta(seconds=200)
    }




def send_password_reset_email(user, site):
        """
        Sends a password reset email to user.
        """

        context = {
            'email': user.email,
            'site': site,
            'site_name': getattr(settings, 'SITE_NAME', None),
            'uid': urlsafe_base64_encode(force_bytes(user.id)),
            'user': user,
            'token': default_token_generator.make_token(user)
        }
        subject = render_to_string(
            'password_reset_email_subject.txt', context
        )

        subject = ''.join(subject.splitlines())

        message = render_to_string(
            'password_reset_email_content.txt', context
        )

        msg = EmailMultiAlternatives(subject, "", settings.DEFAULT_FROM_EMAIL, [user.email])
        msg.attach_alternative(message, "text/html")
        msg.send()
