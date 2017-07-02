package com.brunogomesreis.trabalhopa3_v2.websocket;

import java.io.IOException;
import javax.websocket.CloseReason;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/soquete")
public class Soquete {
    
    public static Session session;
        
    @OnOpen
    public void quandoAbrir(Session session) {
        try {
            Soquete.session = session;
            Soquete.session.getBasicRemote().sendText("{\"mensagem\":\"CONECTOU!\"}");
//            System.out.println("--- OnOpen: Conectou.");
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    @OnMessage
    public void quandoReceber(String arg){
//        System.out.println("--- OnMessage: "+arg);
    }

    @OnError
    public void quandoHouverErro(Session session,java.lang.Throwable throwable) {
//        System.out.println("--- OnError: "+throwable);
    }

    @OnClose
    public void quandoFechar(Session session,CloseReason reason) {
//        System.out.println("--- OnClose: "+reason);
    }
}
