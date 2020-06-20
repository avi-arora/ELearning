from django.conf.urls import url,include
from .views import UserRegistrationView,UserLoginView,activate,PasswordResetAPIView,PasswordResetConfirmView,OrganisationView,BranchView
from rest_framework_jwt.views import refresh_jwt_token, obtain_jwt_token # accounts app
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'create_branch',BranchView)
router.register(r'create_org',OrganisationView)


urlpatterns = [
    url('',include(router.urls)),
    #url(r'^create_org',OrganisationView.as_view()),
    #url(r'^create_branch',BranchView.as_view()),
    url(r'^signup', UserRegistrationView.as_view()),
    url(r'^login',UserLoginView.as_view()),
    url(r'^jwt/$', obtain_jwt_token),
    url(r'^jwt/refresh/$', refresh_jwt_token),
    #url(r'^verify/(?P<verification_key>.+)$',activate,name='email_verify'),
    url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        activate, name='activate'),

    url(r'^password_reset/$',
        PasswordResetAPIView.as_view(),
        name='password_change'),

    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        PasswordResetConfirmView.as_view(),
        name='password_reset_confirm'),


    ]
