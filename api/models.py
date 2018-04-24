from django.db import models
from django.contrib.auth.models import User
# Create your models here.

BANK_LIST = (('sg', 'Societe Generale'), ('bnp_paris', 'BNP Paribas'))
DEVICE_LIST = (('mad', 'Dirham'), ('euro', 'Euro'), ('usd', 'Dollar'))


class Account(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    bank = models.CharField(choices=BANK_LIST, max_length=100)
    title = models.CharField(max_length=100, default='Current account')
    device = models.CharField(choices=DEVICE_LIST, max_length=100)
    description = models.TextField()

    class Meta:
        ordering = ('created',)
