package com.alperarslan.socketIO.Controller;

import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIONamespace;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.EventListener;

@Controller
public class ChatController {
    private SocketIONamespace namespace;

    public SocketIONamespace getNamespace(){
        return namespace;
    }

    private SocketIOServer server;

    public SocketIOServer getServer(){
        return server;
    }

    @Autowired
    public ChatController(SocketIOServer server){
        this.server = server;
        //namespace = server.addNamespace("http://localhost:8000/chat");
        //System.out.println(namespace.getName());
        //this.namespace.addConnectListener(onConnectListener);
        //this.namespace.addDisconnectListener(onDisconnectListener);
        server.addConnectListener(onConnectListener);
        server.addDisconnectListener(onDisconnectListener);
        server.addEventListener("chat", String.class, onUserSendMessage);
        //this.namespace.addEventListener("chat", String.class, dataListener);
    }

    public ConnectListener onConnectListener = new ConnectListener() {
        @Override
        public void onConnect(SocketIOClient socketIOClient) {
            System.out.println("Client " + socketIOClient.getSessionId() + " connected to /chat namespace");
        }
    };

    public DisconnectListener onDisconnectListener = new DisconnectListener() {
        @Override
        public void onDisconnect(SocketIOClient socketIOClient) {
            System.out.println("Client " + socketIOClient.getSessionId() + " disconnected from /chat namespace");
            //namespace.getBroadcastOperations().sendEvent();
        }
    };

    public DataListener<String> onUserSendMessage = new DataListener<String>() {
        @Override
        public void onData(SocketIOClient socketIOClient, String message, AckRequest ackRequest) throws Exception {
            getServer().getBroadcastOperations().sendEvent("chat", socketIOClient, message);
            System.out.println(message);
        }
    };
}
