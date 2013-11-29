require(["nprogress", "jquery"], function(NProgress) {
    NProgress.configure({ trickleRate: 0.02, trickleSpeed: 300 });
    NProgress.configure({showSpinner: false});
	$(document).ready(function() {
		//$("#saludo").hide();
			$.ajax({
				url: "http://tiendaapirest.aws.af.cm/api/categorias",
				beforeSend: function() {
					NProgress.start();
				},
				success: function(data) {
					
					$.each(data.categs, function(key, value) {
						var tab = $("<li>");
						tab.append($("<a href='productos_categoria.php?cat="+ value.id +"'>").html(value.nombre));
						$("#catmenu").append(tab);
					});
					NProgress.done();
				}
			});
			$('#loginform').on('submit',function(event){
			event.preventDefault();
				$.ajax({
				url: "http://tiendaapirest.aws.af.cm/api/login",
				type : "POST",
				data: {
						username: $("#user").val(),
						password: $("#pass").val()
					},
				
				beforeSend: function() {
					NProgress.start();
					NProgress.inc();
				},
				success: function(data) {
                                                if (data.result === 'OK') {

                                                    document.getElementById("login").style.display = "none";
                                                    $.post("login.php",
                                                            {"usr": data.username},
                                                    function(data) {
                                                        //data contains your session data
                                                        window.location = 'index.php';
                                                        
                                                    }
                                                    );
                                                    /*$("#login").hide();
                                                    $("#ingresar").hide();
                                                    $("#saludo").show();
                                                    $("#username").html(data.username);*/
                                                } else {
						if(data.result === 'FAIL USER'){
							document.getElementById("alerta").innerHTML = 'El usuario no existe';
						}else{
							document.getElementById("alerta").innerHTML = 'Contrase&ntilde;a incorrecta';
						}
						$('#alerta').show().delay(3000);					
						$('#alerta').fadeOut(2000);
					}
					NProgress.done();
				}
				});
			});
                        
                        $('#logoutform').on('submit',function(event){
			event.preventDefault();
                            $.post("logout.php",function(){
                                window.location = 'index.php';
                            });
                        });
    });
});

