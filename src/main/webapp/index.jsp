<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>3º Trabalho</title>
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/index.css" />
        
    </head>
    
    <body>
        <div id="divPrincipal">
            <span>Alarme de CO</span>
            <br>
            <span id="idMensagens" style="font-size:20pt;">&nbsp;</span>
            <audio id="som-alarme"  src="" preload="auto" loop></audio>
            <br>
            <br>
            <br>
            <br>
            <img id="imagem" src="images/alarm_home_normal.jpg" alt="" width="200"/>
            <br>
            <br>
            <div class="divBotao" onclick="desligaSomAlarme();">ACK<br><span class="font_pequeno">(desliga alarme sonoro)</span></div>
            <div class="divBotao" onclick="resetarAlarme();">RESET<br><span class="font_pequeno">(rearma o alarme)</span></div>
            <div class="divBotao" onclick="conectar();">Conectar</div>
            <div class="divBotao" onclick="desconectar();">Desconectar</div>
            
            <br>
            <br>
        </div>
        <script type="application/javascript" src="js/index.js"></script>
        <script type="application/javascript" src="js/jquery-1.11.1.min.js"></script>
        
    </body>
</html>
