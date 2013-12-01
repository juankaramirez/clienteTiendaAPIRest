/*require(["nprogress", "jquery"], function(NProgress) {
    NProgress.configure({ trickleRate: 0.02, trickleSpeed: 300 });
    NProgress.configure({showSpinner: false});*/
$(document).ready(function() {
    var id = window.location.search;
    var idn = id.charAt(id.length - 1);
    $.ajax({
        url: "http://tiendaapirest.aws.af.cm/api/canasta",
        type: 'GET',
        data:{
            username: document.getElementById('username').innerText
        },
        beforeSend: function() {
//                NProgress.start();
//                NProgress.set(0.5);
            },
        success: function(data) {
            if(data.result === "OK"){
                //window.location="index.php";
            

            $.each(data.prods, function(key, value) {
//                var pic=null;
//                $.ajax({
//                url: "http://localhost/tiendasoft/api/dbimages/"+value.url,
//                
//                success: function(data) {
//                    pic = data.img;
//                }
//            });
                var prod2 = $("<div class='uk-grid uk-panel-box marg '>").append($("<div class='uk-width-medium-3-10'>").append($("<div class='uk-thumbnail uk-thumbnail-mini'>").append($("<img src='http://tiendaapirest.aws.af.cm/dbimages/"+value.url+"' alt=''>")).append($("<div class='uk-thumbnail-caption'>").html(value.nombre))));
                var prod3 = $("<div class='uk-width-medium-7-10'>");
                var prod4 = $("<div class='uk-grid' id='thproducto'>").append($("<div class='uk-width-medium-1-1'>").append($("<div class='uk-text-justify'>").html(value.descr)));
                var prod5 = $("<div class='uk-width-medium-5-10 uk-container-center uk-margin-top'>").html("Precio: " + value.precio);
                var prod6 = $("<div class='uk-width-medium-5-10 uk-margin-top'>").html("En Stock: " + value.existencia);
                //var prod7 = $("<div class='uk-push-3-10 uk-width-medium-1-1 uk-container-center uk-margin-top'>").append($("<form class = 'uk-form' role='form' id='canasta' method='POST'>").append($("<fieldset>")));
                //var prod8=  $("<input value='"+data.categ+"' style='visibility:hidden;' name='categoria' type='text' id='categoria' >");
                //var prod9=  $("<input value='"+data.id+"' style='visibility:hidden;' name='catId' type='text' id='catId'");        
                //var prod10=  $("<input value='"+value.id+"' style='visibility:hidden;' name='prodId' type='text' id='prodId'");        
                //var prod11 = $("<div class='uk-form-row uk-maring-top'>").append($("<button class='uk-button uk-button-primary' data-uk-modal='{target:\"#login\"}' type='button'>").html("Comprar"));
                //prod7.append(prod8);
                //prod7.append(prod9);
                //prod7.append(prod10);
                //prod7.append(prod11);
                
                $("#principal").append(prod2.append(prod3.append(prod4.append(prod5).append(prod6))));
            });
            
            //Necesito validar el tamaño del vector prods, si está vacio no hace las siguientes 6 sentencias
            var prod7 = $("<div class='uk-grid  '>").append($("<div class='uk-push-2-10 uk-width-medium-1-3 uk-container-center uk-margin-top'>"));
            var prod8 = $("<div class='uk-push-2-10 uk-width-medium-1-3 uk-container-center uk-margin-top'>").append($("<form class = 'uk-form' id='comprar' name='vaciar' role='form' method='POST'>").append($("<fieldset>").append($("<div class='uk-form-row uk-maring-top'>").append($("<button class='uk-button uk-button-primary' type='submit' name='comprar'>Comprar</button>")))));
            var prod9 = $("<div class='uk-push-2-10 uk-width-medium-1-3 uk-container-center uk-margin-top'>").append($("<form class = 'uk-form' id='vaciar' name='vaciar'role='form' method='POST'>").append($("<fieldset>").append($("<div class='uk-form-row uk-maring-top'>").append($("<button class='uk-button uk-button-danger' type='submit' name='eliminar'>Vaciar canasta</button>")))));
            prod7.append(prod8);                   
            prod7.append(prod9);
            $("#principal").append(prod7);
            
            //NProgress.done();
            }
        }
    });

        
        
        $("#logoutform").on("submit", function(event) {
            event.preventDefault();
                            $.post("logout.php",function(){
                                window.location = 'index.php';
                            });
        });
        
        $("#comprar").on("submit", function(event) {
            event.preventDefault();
            $.ajax({
                url: "http://localhost/APIRest/api/canasta",
                type: "POST",
                beforeSend: function() {
//                    NProgress.start();
//                    NProgress.inc();
                },
                success: function() {
                    
                    location.reload();
//                    NProgress.done();
                }
            });
        });
        
        $("#vaciar").on("submit", function(event) {
            event.preventDefault();
            $.ajax({
                url: "http://localhost/APIRest/api/canasta",
                type: "DELETE",
                beforeSend: function() {
//                    NProgress.start();
//                    NProgress.inc();
                },
                success: function() {
                    
                    location.reload();
//                    NProgress.done();
                }
            });
        });
});
//});


