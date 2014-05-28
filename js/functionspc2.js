require(["nprogress", "jquery"], function(NProgress) {
    NProgress.configure({ trickleRate: 0.02, trickleSpeed: 300 });
    NProgress.configure({showSpinner: false});
$(document).ready(function() {
    var id = window.location.search;
    var idn = id.charAt(id.length - 1);
    /* $.ajax({
        url: "http://tiendaapirest.aws.af.cm/api/canasta/",
        beforeSend: function() {
                NProgress.start();
                NProgress.set(0.5);
            },	
        success: function(data) {
            if(data.username!==""){
                window.location="index.php";
            }

            
            
            NProgress.done();
        }
    });  */
	/*var arr = {
				"username" : "jlpicard",
				"email" : "capt@enterprise.com",
				"givenName" : "Jean-Luc",
				"surname" : "Picard",
				"password" : "uGhd%a8Kl!"
			};*/

        $("#registroform").on("submit", function(event) {
            event.preventDefault();
            $.ajax({
                url: "http://tiendaapirest.aws.af.cm/api/signup",
                type: "POST",
                data: {
                    username: $("#username").val(),
					nombre: $('#nombre').val(),
					apellido: $('#apellido').val(),
					email: $("#email").val(),
                    password: $("#password").val(),
                    reppassword: $("#reppassword").val()
                },
				
                beforeSend: function() {
                    NProgress.start();
                    NProgress.inc();
                },
                success: function(data) {
                    if(data.result === "OK"){
						alert("Registro exitoso -> Usuario: "+data.username);
                        window.location.href="index.php";
                        //location.reload();
                    }else{
						if(data.result === 'FAIL REPASS'){
							document.getElementById("alerta").innerHTML = 'Las contrase&ntilde;as no coinciden';
						}else if(data.result === 'FAIL EMAIL') {
							document.getElementById("alerta").innerHTML = 'El email ingresado ya se encuentra registrado';
						}else if(data.result === 'FAIL USER'){
							document.getElementById("alerta").innerHTML = 'El usuario ingresado ya se encuentra registrado';
						}else{
							document.getElementById("alerta").innerHTML = 'La contrase&ntilde;a debe ser de m&iacute;nimo 8 caracteres y debe tener al menos un n&uacute;mero, may&uacute;scula y min&uacute;scula';
						}
						$('#alerta').show().delay(4000);					
						$('#alerta').fadeOut(2000);						
                    }
                    NProgress.done();
                }
            });
        });
	});
});


