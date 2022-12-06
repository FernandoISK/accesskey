from django import forms

class UserForm(forms.Form):
    first_name = forms.CharField(max_length=40, min_length = 3, required = True)
    middle_name = forms.CharField(max_length=40, min_length = 3, required = False)
    paternal_surname = forms.CharField(max_length=40, min_length = 3, required = True)
    maternal_surmame = forms.CharField(max_length=40, min_length = 3, required = True)
    username = forms.CharField(max_length=25, min_length = 3, required = True)
    email = forms.EmailField()
    position = forms.CharField(required=True)
    level_of_schooling = forms.CharField(required=True)
    cellphon = forms.IntegerField( required=True, max_value= 9999999999)
    password = forms.CharField(max_length=50, min_length = 8, required = True)

    




