package com.alperarslan.socketIO.Controller;

import com.alperarslan.socketIO.Response.Response;
import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIONamespace;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

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
        server.addConnectListener(onConnectListener);
        server.addDisconnectListener(onDisconnectListener);
        server.addEventListener("chat", String.class, onUserSendMessage);
    }

    public ConnectListener onConnectListener = new ConnectListener() {
        @Override
        public void onConnect(SocketIOClient socketIOClient) {
            System.out.println("Client " + socketIOClient.getSessionId() + " connected to /chat namespace");
            String responseMessage = Response.getConnectedResponse();
            getServer().getBroadcastOperations().sendEvent("connect", responseMessage);
        }
    };

    public DisconnectListener onDisconnectListener = new DisconnectListener() {
        @Override
        public void onDisconnect(SocketIOClient socketIOClient) {
            System.out.println("Client " + socketIOClient.getSessionId() + " disconnected from /chat namespace");
        }
    };

    public DataListener<String> onUserSendMessage = new DataListener<String>() {
        @Override
        public void onData(SocketIOClient socketIOClient, String message, AckRequest ackRequest) throws Exception {
            getServer().getBroadcastOperations().sendEvent("chat", socketIOClient, message);
            String responseMessage = Response.getRandomResponse();
            getServer().getBroadcastOperations().sendEvent("response", responseMessage);
        }
    };

}
