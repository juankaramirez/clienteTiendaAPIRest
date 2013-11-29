require(["nprogress", "jquery"], function(NProgress) {
    $(document).ready(function() {
        $("#form").on("submit", function(event) {
            event.preventDefault();
            $.ajax({
                url: "http://localhost/APIRest/api/entrada",
                type: "POST",
                data: {
                    titulo: $("#titulo").val(),
                    contenido: $("#contenido").val(),
                },
                success: function() {
                    window.location = "../clienteAPIRest"
                }
            });
        });

        $("#form1").on("submit", function(event) {
            event.preventDefault();
            $.ajax({
                url: "http://localhost/APIRest/api/login",
                data: {
                    username: $("#username").val(),
                    pass: $("#pass").val()
                },
                beforeSend:function(){
                    NProgress.start();
                    //NProgress.inc();
                },
                success: function(data) {
                    var a = 0;
                    $.each(data.result, function(key, value) {
                        a = 1;
                    });
                    if (a) {
                        window.location = "../clienteAPIRest/indexlogged.php";
                        // $.ajax({
                        //   url: "http://localhost/APIRest/api/account",
                        // success: function(data1) {
                        //   $("#user").val(data1);
                        //}
                        // });

                    } else {
                        $("#error").html("<script  >alert('Por favor intente de nuevo')</script>")
                    }
                    NProgress.done();
                }
            });
        });

        $("#form2").on("submit", function(event) {
            event.preventDefault();
            $.ajax({
                url: "http://localhost/APIRest/api/usuario",
                type: "POST",
                data: {
                    username: $("#username").val(),
                    pass: $("#pass").val(),
                    nickname: $("#nickname").val()
                },
                success: function() {
                    window.location = "../clienteAPIRest/indexlogged.php"
                }
            });
        });
    });
});