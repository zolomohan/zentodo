let password = $('#password'),
	confirmPassword = $('#confirmpassword');

function validate() {
	if ($('#form').attr('action') === '/register' && !(password.val() === confirmPassword.val())) {
		console.log('if');
		$('#dontMatch').css('display', 'block');
		confirmPassword.val('');
		return false;
	}
	return true;
}
