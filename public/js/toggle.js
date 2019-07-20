$('.signinBtn').click(function(){
    $('#form').attr('action', '/login');
    $('#mainSigninBtn').css('display','none')
    $("#confirmpassword" ).css('display','none')
    $("#confirmpassword" ).removeAttr('required')
    $('#option-signin').css('display','none');
    $('#option-signup').css('display','block');
    $('#form').css('display','block');
    $('.authBtn.filled').text('Sign In')
})

$('#altOptionSignup').click(function(){
    $('#form').attr('action', '/register');
    $('#form').css('display','block');
    $("#confirmpassword" ).css('display','inline')
    $("#confirmpassword" ).attr('required', 'true')
    $('#mainSigninBtn').css('display','none')
    $('#option-signup').css('display','none');
    $('#option-signin').css('display','block');
    $('.authBtn.filled').text('Sign Up')
})
