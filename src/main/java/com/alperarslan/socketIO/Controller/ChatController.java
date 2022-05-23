package com.alperarslan.socketIO.Controller;

import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIONamespace;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ChatController {
    private SocketIONamespace namespace;

    @Autowired
    public ChatController(SocketIOServer server){
        namespace = server.addNamespace("/chat");

        namespace.addConnectListener(new ConnectListener() {
            @Override
            public void onConnect(SocketIOClient socketIOClient) {
                System.out.println("Client connected to /chat");
            }
        });
    }
}
