<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="uikit/css/uikit.gradient.min.css" />
        <link rel="stylesheet" href="uikit/css/custom.css" />
		<link rel="stylesheet" href="css/nprogress.css" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registro</title>
    </head>
    <body>
        <div class="uk-grid">
            <div class="uk-width-1-1">
                <div class="uk-margin-bottom uk-margin-top">
                    <nav class="uk-navbar">
                        <ul class="uk-navbar-nav">
                            <li class="uk-active"><a href="index.php">MINI TIENDA ONLINE</a></li>
                        </ul>
                    </nav>
                </div>
            </div>



            <div class="uk-width-1-1">
                <div class="uk-push-3-10 uk-width-4-10">
                    <div class="uk-panel uk-panel-box">
                        <form id="registroform" class="uk-form uk-form-horizontal" action="register.php" method="POST">
                            <fieldset>
                                <div class="uk-width-1-1">
                                    <legend><h1>Registro</h1></legend>
                                </div>
                                <div class="uk-push-1-10">
                                    <div class="uk-form-row">
                                        <label class="uk-form-label" >Usuario</label>
                                        <div class="uk-form-controls">
                                            <input name="username" class="uk-form-width-medium" type="text" id="username" placeholder="Username" >
                                        </div>
                                    </div>
									
									<div class="uk-form-row">
                                        <label class="uk-form-label" >Nombre</label>
                                        <div class="uk-form-controls">
                                            <input name="nombre" class="uk-form-width-medium" type="text" id="nombre" placeholder="Nombre" >
                                        </div>
                                    </div>
									
									<div class="uk-form-row">
                                        <label class="uk-form-label" >Apellido</label>
                                        <div class="uk-form-controls">
                                            <input name="apellido" class="uk-form-width-medium" type="text" id="apellido" placeholder="Apellido" >
                                        </div>
                                    </div>
									
									<div class="uk-form-row">
                                        <label class="uk-form-label" for="password">Email</label>
                                        <div class="uk-form-controls">
                                            <input name="email" class="uk-form-width-medium" id="email"  type="email" placeholder="Email">
                                        </div>
                                    </div>
                                    
                                    <div class="uk-form-row">
                                        <label class="uk-form-label" for="password">Contrase&ntilde;a</label>
                                        <div class="uk-form-controls">
                                            <input name="password" class="uk-form-width-medium" type="password" id="password"  placeholder="Contrase&ntilde;a" data-uk-tooltip title="La contrase&ntilde;a debe ser de m&iacute;nimo 8 caracteres y debe tener al menos un n&uacute;mero, may&uacute;scula y min&uacute;scula">
                                        </div>
                                    </div>

                                    <div class="uk-form-row">
                                        <label class="uk-form-label" for="reppassword">Repita su contrase&ntilde;a</label>
                                        <div class="uk-form-controls">
                                            <input name="reppassword" class="uk-form-width-medium" type="password" id="reppassword" placeholder="Repita su contrase&ntilde;a">
                                        </div>
                                    </div>

                                </div>
								
								<div class='uk-form-row uk-margin-top'>
										<div id='alerta' class="uk-alert uk-alert-danger" style='display: none;'></div>
								</div>
                                <div class="uk-form-row">
                                    <div class="uk-grid uk-margin-top">
                                        <div class="uk-width-1-1" align="center">
                                            <button name="enviar" class="uk-button uk-button-large uk-button-primary" type="submit">Enviar datos</button>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
        <script src="uikit/js/uikit.min.js"></script>
        <script data-main="js/functionspc2.js" src="js/require.js"></script>
    </body>
</html>
