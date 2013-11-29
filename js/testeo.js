/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 $(document).ready(function() {
var id = window.location.search;
        var idn = id.charAt(id.length - 1);
        $.ajax({
            url: "http://tiendaapirest.aws.af.cm/api/categorias/" + idn,
            beforeSend: function() {
//                NProgress.start();
//                NProgress.set(0.5);
            },
            success: function(data) {
                $("#catnombre").html(data.categ);
                $.each(data.categs, function(key, value) {
                    var tab = $("<li>");
                    tab.append($("<a href='productos_categoria.php?cat=" + value.id + "'>").html(value.nombre));
                    $("#canvasmenu").append(tab);
                });
                
  
                $.each(data.prods, function(key, value) {
                    /*var prod2 = $("<div class='uk-grid uk-panel-box'>").append($("<div class='uk-width-medium-3-10'>").append($("<div class='uk-thumbnail uk-thumbnail-mini'>").append($("<img src='http://tiendaapirest.aws.af.cm/dbimages/" + value.url + "' alt=''>")).append($("<div class='uk-thumbnail-caption'>").html(value.nombre))));
                    var prod3 = $("<div class='uk-width-medium-7-10'>");
                    var prod4 = $("<div class='uk-grid' id='thproducto'>").append($("<div class='uk-width-medium-1-1'>").append($("<div class='uk-text-justify'>").html(value.descr)));
                    var prod5 = $("<div class='uk-width-medium-5-10 uk-container-center uk-margin-top'>").html("Precio: " + value.precio);
                    var prod6 = $("<div class='uk-width-medium-5-10 uk-margin-top'>").html("En Stock: " + value.existencia);*/

                    var prod10 = $("<input value='" + value.id + "' style='visibility:hidden;' name='prodId' type='text' id='prodId'>");

                    var prod11 = $("<div class='uk-form-row uk-margin-top'>").append($("<button class='uk-button uk-button-primary' type='submit'> ").html("Comprar"));

                    var prod7 = $("<div class='uk-push-3-10 uk-width-medium-1-1 uk-container-center uk-margin-top'>").append($("<form class='uk-form' id='canasta1'  method='POST' >").append($("<fieldset>").append(prod11).append(prod10)));
                    //var prod8=  $("<input value='"+data.categ+"' style='visibility:hidden;' name='categoria' type='text' id='categoria' >");
                    //var prod9=  $("<input value='"+document.getElementById('username').innerHTML+"' style='visibility:hidden;' name='username' type='text' id='username'>");        

                    //prod7.append(prod8);
                    //prod7.append(prod9);
//                prod7.append(prod10);
//                prod7.append(prod11);
                
                    //$("#principal").append(prod2.append(prod3.append(prod4.append(prod5).append(prod6).append(prod7))));
                    $('#principal').html(prod7);
                });
                
                //NProgress.done();
            }
        });


$('#canasta1').on('submit', function(event) {
            event.preventDefault();
            alert("asd");
            $.ajax({
                url: "http://tiendaapirest.aws.af.cm/api/canasta",
                type: "POST",
                data: {
                    //categoria: $("#categoria").val(),
                    username: "yodencio",
                    prodId: 2

                },
                beforeSend: function() {
                    alert("asd");
//                    NProgress.start();
//                    NProgress.inc();
                },
                success: function(data) {
                    alert('sad');
                    //console.log(data.result);
                    //location.reload();
//                    NProgress.done();
                }
            });
        });
         });
        
        
  //$('#principal').append(html);