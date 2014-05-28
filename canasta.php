<?php session_start();  ?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="charset=UTF-8">
        <link rel="stylesheet" href="uikit/css/uikit.gradient.min.css" />
        <link rel="stylesheet" href="uikit/css/custom.css" />
        <link href="css/nprogress.css" rel="stylesheet" media="screen">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
         
        
        <title>Mini Tienda Online</title>
    </head>
    <body>

        <div class="uk-grid">
            <div class="uk-width-1-1">
                <div class="uk-margin-bottom">
                    <nav class="uk-navbar">
                        <ul class="uk-navbar-nav">
                            <li class="uk-active"><a href="index.php">MINI TIENDA ONLINE</a></li>
                        </ul>


                        <div class="uk-navbar-flip">

                            <ul class="uk-navbar-nav">
                                <?php
                                if(isset($_SESSION['user'])){
                                    echo ' <li  id="ingresar" style="display: none;"><a href="#" data-uk-modal="{target:\'#login\'}">Ingresar</a></li>';
                                    echo '<li id ="saludo" class="uk-button-dropdown" data-uk-dropdown="{mode:"click"}"  >';
                                    echo '<a href="#">Bienvenido: <span id="username">'.$_SESSION['user'].'</span></a>';
                                }else{
                                    echo ' <li  id="ingresar"><a href="#" data-uk-modal="{target:\'#login\'}">Ingresar</a></li>';
                                    echo '<li id ="saludo" class="uk-button-dropdown" data-uk-dropdown="{mode:"click"}" style="display: none;" >';
                                    echo '<a href="#">Bienvenido: <span id="username"></span></a>';
                                }
                            ?>
                                    <div class="uk-dropdown" style="">
                                        <ul class="uk-nav uk-nav-dropdown">
                                            <li class="uk-nav-header">Opciones</li>
                                            <li><a href="canasta.php">Canasta</a></li>
                                            <li class="uk-nav-divider"></li>
                                            <li><a href="#" data-uk-modal="{target:'#logout'}">Salir</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>                       
                    </nav>
                </div>
            </div>



            <div class="uk-push-1-10 uk-width-6-10 uk-container-center" id="principal">

            </div>
            <div class="uk-push-1-10 uk-width-3-10">
                <div class="uk-panel uk-panel-box uk-panel-header">
                    <h3 class="uk-panel-title">M&aacute;s buscados</h3>
                    <ul class="uk-nav">
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul>
                </div>
            </div>
        </div >




        <div id="logout" class="uk-modal">
            <div id="modal" class="uk-modal-dialog uk-modal-dialog-slide">
                <a class="uk-modal-close uk-close"></a>
                <div class="uk-width-medium-8-10 uk-container-center">
                    <div class="uk-grid">
                        <div class="uk-width-1-1">
                            <h1>Salir</h1>
                            <hr class="uk-grid-divider">   
                        </div>

                        <div class="uk-width-1-1" align="center">
                            <h3>Est&aacute; seguro?</h3>
                            <hr class="uk-grid-divider">
                        </div>
                        <div class="uk-width-1-1">
                            <form class="uk-form"  >
                                <fieldset>
                                    <div class="uk-form-row ">
                                        <div class="uk-grid">
                                            <div class="uk-push-4-6 uk-width-1-6  uk-hidden-small">
                                                <button name="salir" class="uk-button uk-button-large uk-button-primary" type="submit">Salir</button>
                                            </div>
                                            <div class="uk-width-1-6 uk-hidden-small">
                                                <button class="uk-button uk-button-large uk-button-primary uk-modal-close" type="submit">Cancelar</button>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>  
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="http://code.jquery.com/jquery-latest.js"></script>
        <script src="uikit/js/uikit.min.js"></script>
        <script type="text/javascript" src="js/functionspc1.js" ></script>
       
    </body>
</html>