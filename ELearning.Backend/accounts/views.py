from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAdminUser
from .serializers import UserRegistrationSerializer,PasswordResetSerializer,PasswordResetConfirmSerializer,UserLoginSerializer,OrganisationSerializer,BranchSerializer
from rest_framework.generics import RetrieveAPIView,CreateAPIView
from rest_framework import generics,status,views
from rest_framework_jwt.settings import api_settings
from django.contrib.auth import authenticate, get_user_model
from django.db.models import Q
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from .utils import send_password_reset_email
from rest_framework import viewsets
from .models import Branch,User,Organisation
jwt_payload_handler             = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler              = api_settings.JWT_ENCODE_HANDLER
jwt_response_payload_handler    = api_settings.JWT_RESPONSE_PAYLOAD_HANDLER


class OrganisationView(viewsets.ModelViewSet):
    serializer_class = OrganisationSerializer
    permission_classes=(IsAdminUser,)
    queryset = Organisation.objects.all()

class BranchView(viewsets.ModelViewSet):
    serializer_class = BranchSerializer
    permission_classes=(IsAdminUser,)
    queryset = Branch.objects.all()

class UserRegistrationView(CreateAPIView):

    serializer_class = UserRegistrationSerializer
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        #return HttpResponse('Please confirm your email address to complete the registration.')

        status_code = status.HTTP_201_CREATED
        response = {
                'success' : 'True',
                'status code' : status_code,
                'message': 'User registered  successfully',
                }

        return Response(response, status=status_code)

class PasswordResetAPIView(views.APIView):

    permission_classes = (AllowAny,)
    serializer_class = PasswordResetSerializer


    def post(self,request):
        user = User.objects.get(email=request.data.get('email'))
        if user:
            send_password_reset_email(user,site='http://127.0.0.1:8000')
            return Response(status=status.HTTP_200_OK)
        return Response(status=statu.HTTP_200_OK)


class PasswordResetConfirmView(views.APIView):
    permission_classes = (AllowAny,)
    serializer_class = PasswordResetConfirmSerializer

    def post(self,request,*args,**kwargs):
        serializer = self.serializer_class(
        data=request.data,
        context={
            'uidb64':kwargs['uidb64'],
            'token':kwargs['token']
        }
        )
        if serializer.is_valid(raise_exception=True):
            new_password = serializer.validated_data.get('new_password')
            user = serializer.user
            user.set_password(new_password)
            user.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(views.APIView):

    permission_classes = (AllowAny,)
    serializer_class = UserLoginSerializer
    queryset = User.objects.all()

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.data['email']
        token = serializer.data['token']
        response = jwt_response_payload_handler(token,user,request=request)
        status_code = status.HTTP_200_OK

        return Response(response, status=status_code)




@api_view(('GET',))
def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(id=uid)
        print(user)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        return Response('Thank you for your email confirmation. Now you can login your account.')
    else:
        return Response('Activation link is invalid!')
