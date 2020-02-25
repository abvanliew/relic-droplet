document.getElementById( 'submit-registration' ).addEventListener( 'click', (e) => {
	e.preventDefault();
	
	var email = document.getElementById( 'inputEmail' ).value;
	var username = document.getElementById( 'inputUsername' ).value;
	var pass = document.getElementById( 'inputPassword' ).value;
	
	var attributeList = [];
	
	var dataEmail = {
		Name : 'email',
		Value : email
	};
	
	attributeList.push( dataEmail );
	
	UserPool.signUp( username, pass, attributeList, null, function( err, res ) {
		if( err ) {
			alert( err );
			return;
		}
		
		cognitoUser = res.user;
		window.location.href = 'login.html';
	});
})