from django.db import models
from django.contrib.auth.models import User
# Create your models here.

BANK_LIST = (('sg', 'Societe Generale'), ('bnp_paris', 'BNP Paribas'))
DEVICE_LIST = (('mad', 'Dirham'), ('euro', 'Euro'), ('usd', 'Dollar'))


class Bank(models.Model):
    name = models.CharField(max_length=100, unique=True)
    address = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=100, blank=True)
    country = models.CharField(max_length=100, blank=True)


class Account(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, related_name='accounts', on_delete=models.CASCADE)
    bank = models.ForeignKey(Bank, related_name='accounts', on_delete=models.CASCADE)
    title = models.CharField(max_length=100, default='Current account')
    device = models.CharField(choices=DEVICE_LIST, max_length=100)
    description = models.TextField(blank=True, default='Account to store all bank operations')

    class Meta:
        ordering = ('created',)


class Operation(models.Model):
    date = created = models.DateTimeField(auto_now_add=True)
    operations = models.ManyToManyField(User, related_name='accounts', on_delete=models.CASCADE)
