from django.db import models
from django.contrib.auth.models import User
# Create your models here.

BANK_LIST = (('sg', 'Societe Generale'), ('bnp_paris', 'BNP Paribas'))
DEVICE_LIST = (('mad', 'Dirham'), ('euro', 'Euro'), ('usd', 'Dollar'))
CATEGORIES = (
    ('deco', 'Decoration'), ('ameub','Ameublement'), ('sante', 'Santé'),
    ('course', 'Course'), ('vetm','Habillement'), ('assu', 'Assurances'),
    ('trans', 'Transports'), ('comm','Communications'), ('loisir', 'Loisirs'),
    ('etude', 'Etude'), ('garde', 'Garde'), ('restos', 'Restauration'),
    ('hotel', 'Hôtels'), ('services', 'Services'), ('culture', 'Culture'), ('diver', 'Divers'))


class Bank(models.Model):
    name = models.CharField(max_length=100, unique=True)
    address = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100, blank=True)


class Account(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, default='Current account', unique=True)
    user = models.ForeignKey(User, related_name='accounts', on_delete=models.CASCADE)
    bank = models.ForeignKey(Bank, related_name='accounts', on_delete=models.CASCADE)
    device = models.CharField(choices=DEVICE_LIST, max_length=100)
    description = models.TextField(blank=True, default='Account to store all bank operations')
    credit = models.IntegerField(default=0)
    overdraft = models.BooleanField(default=False)

    class Meta:
        ordering = ('created',)


class Operation(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)
    account = models.ForeignKey(Account, related_name='operations', on_delete=models.CASCADE)
    categories = models.CharField(choices=CATEGORIES, max_length=100)
    transaction = models.IntegerField()
