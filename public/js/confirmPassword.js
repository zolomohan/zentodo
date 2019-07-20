let password = $('#password'),
    confirmPassword = $('#confirmpassword');

function validate(){
    if(!(password.val() === confirmPassword.val())){
        $('#dontMatch').css('display', 'block');
        confirmPassword.val('');
        return false;
    }
    return true;
}
