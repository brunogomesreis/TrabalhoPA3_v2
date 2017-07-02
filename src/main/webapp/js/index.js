

var websocket;
//------------------------------------------------------------------------------
function mudaCorAlarme(alarme){
    if (alarme==="true"){
        $('#imagem').attr("src","images/alarm_home.jpg");}
    else
        $('#imagem').attr("src","images/alarm_home_normal.jpg");
}

function resetarAlarme(){
     websocket.onmessage = function (evt) {
        var json = JSON.parse(evt.data);
        if (typeof evt.data === "string") {
             mudaCorAlarme(json.mensagem);
        } else {
            console.log('Recebeu dados binários! E agora?');
        }
    };
}

function conectar() {
    var wsUri = "ws://localhost:8084/terceiro_trabalho/soquete";
    try {
        websocket = new WebSocket(wsUri);
    } catch (erro) {
        $('#idMensagens').html('Erro: ' + erro);
        return;
    }
    websocket.binaryType = "arraybuffer";

    websocket.onopen = function(ev){console.log('=== Conectou');}
    
    $('#idMensagens').html('Conectado');
    
    websocket.onmessage = function (evt) {
        var json = JSON.parse(evt.data);
        if (typeof evt.data === "string") {
            if (json.mensagem==="true"){
                mudaCorAlarme("true");
            }
        } else {
            console.log('Recebeu dados binários! E agora?');
        }
    };
    websocket.onerror = function (evt) {
        $('#idMensagens').html('Erro: ' + evt);
    };
}
//------------------------------------------------------------------------------
function desconectar() {
    websocket.close();
    $('#idMensagens').html('DESCONECTOU!');
}
//------------------------------------------------------------------------------
function fazerPedidoHTTP() {
    $.ajax(
            {
                type: 'GET',
                url: '/websocket_simples/OutroServlet',
                data: "nome=valor",
                dataType: 'text',
                cache: false,
                async: true,
                success: function (responseData) {
                    
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    $('#idMensagens').html('Erro: ' + thrownError);
                }
            }
    );
    

}
//------------------------------------------------------------------------------
