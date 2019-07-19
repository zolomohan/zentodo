$('.signinBtn').click(function(){
    $('#mainSigninBtn').css('display','none')
    $('#registerForm').css('display', 'none');
    $('#option-signin').css('display','none');
    $('#option-signup').css('display','block');
    $('#loginForm').css('display','block');
})

$('#altOptionSignup').click(function(){
    $('#mainSigninBtn').css('display','none')
    $('#loginForm').css('display','none');
    $('#option-signup').css('display','none');
    $('#option-signin').css('display','block');
    $('#registerForm').css('display', 'block');
})

$('#regPassword').keypress(function(event){
    console.log($('#regPassword').val());
    if(event.which == 13){
        $('#password').val($('#regPassword').val()); 
        console.log($('#password').val());
    }
})