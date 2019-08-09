let form = $('#form'),
	mainSigninBtn = $('#mainSigninBtn'),
	signin = $('#option-signin'),
	signup = $('#option-signup'),
	confirmpassword = $('#confirmpassword'),
	authBtn = $('.authBtn.filled'),
	dontMatch = $('#dontMatch');

confirmpassword.keypress(function() {
	dontMatch.css('display', 'none');
});

$('.signinBtn').click(function() {
	form.attr('action', '/login');
	[ mainSigninBtn, confirmpassword, signin ].forEach(function(element) {
		element.css('display', 'none');
	});
	[ form, signup ].forEach(function(element) {
		element.css('display', 'block');
	});
	confirmpassword.removeAttr('required');
	authBtn.text('Sign In');
});

$('#altOptionSignup').click(function() {
	form.attr('action', '/register');
	[ form, signin ].forEach(function(element) {
		element.css('display', 'block');
	});
	[ signup, mainSigninBtn ].forEach(function(element) {
		element.css('display', 'none');
	});
	confirmpassword.css('display', 'inline').attr('required', 'true');
	authBtn.text('Sign Up');
});
