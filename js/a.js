require(["nprogress", "jquery"], function(NProgress) {
    NProgress.configure({ trickleRate: 0.02, trickleSpeed: 300 });
    NProgress.configure({showSpinner: false});
    $(document).ready(function() {

        $("#sec").hide();
        $("#sec2").hide();
        $.ajax({
            url: "http://localhost/APIRest/api/entradas",
            beforeSend: function() {
                NProgress.start();
                NProgress.inc();
            },
            success: function(data) {
                var tab = $("<div class='uk-width-1-1 uk-push-1-6'>")
                $.each(data.result, function(key, value) {
                    tab.append($("<div class='uk-panel'>"));
                    tab.append($("<article class='uk-article'>"));
                    var y = $("<a href='#'>").on("click", function(event) {
                        event.preventDefault();

                        $.ajax({
                            url: "http://localhost/APIRest/api/entradas/" + value.identrada,
                            beforeSend: function() {
                                    NProgress.start();
                                    NProgress.set(0.5);
                            },
                            success: function(data1) {
                                $("#sec1").hide();
                                $("#sec2").show();
                                $.each(data1.result, function(key, value1) {
                                    $("#t").html(value1.titulo);
                                    $("#m").html("Publicado en " + value1.fecha + " a las " + value1.hora);
                                    $("#c").html(value1.contenido);
                                });
                                NProgress.done();
                            }
                        });

                    });
                    y.html("<h1 class='uk-article-title'>" + value.titulo + "</h1>");
                    tab.append(y);
                    tab.append($("<p class='uk-article-meta'>").html("Publicado en " + value.fecha + " a las " + value.hora));
                    tab.append($("<p id='artcont' class='uk-text-truncate uk-text-justify'>").html(value.contenido));
                    var a = $("<a href='#'>").on("click", function(event) {
                        event.preventDefault();
                        $("#sec").show();
                        $("#sec1").hide();
                        $("#id").val(value.identrada);
                        $("#idautor").val(value.idadmin);
                        $("#titulo").val(value.titulo);
                        $("#contenido").val(value.contenido);
                    }).html("editar");
                    var b = $("<a href='#'>").on("click", function(event) {
                        event.preventDefault();
                        if (confirm("Seguro!!!?")) {
                            $.ajax({
                                url: "http://localhost/APIRest/api/entrada/eliminar/" + value.identrada,
                                type: "DELETE",
                                success: function() {
                                    location.reload();
                                }
                            });
                        }
                    }).html(" eliminar");
                    tab.append(a).append(b);
                    tab.append($("<hr class='uk-article-divider'>"));
                });
                $("#tabla").html(tab);
                NProgress.done();
            }
        });

        $("#form").on("submit", function(event) {
            event.preventDefault();
            $.ajax({
                url: "http://localhost/APIRest/api/entrada/modificar/" + $("#id").val(),
                type: "PUT",
                data: {
                    titulo: $("#titulo").val(),
                    contenido: $("#contenido").val()
                },
                beforeSend: function() {
                    NProgress.start();
                    NProgress.inc();
                },
                success: function() {
                    $("#sec").hide();
                    location.reload();
                    $("#sec1").show();
                    NProgress.done();
                }
            });
        });

        $("#form3").on("submit", function(event) {
            event.preventDefault();
            $.ajax({
                url: "http://localhost/APIRest/api/usuario",
                type: "POST",
                data: {
                    userid: $("#userid").val(),
                    commentcont: $("#comment").val()
                },
                beforeSend: function() {
                    NProgress.start();
                    NProgress.inc();
                },
                success: function() {
                    //Por trabajar
                    //window.location = "../clienteAPIRest/indexlogged.php"
                    NProgress.done();
                }
            });
        });
    });
});