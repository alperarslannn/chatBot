package com.alperarslan.socketIO.Configuration;

import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;

import javax.annotation.PreDestroy;

@org.springframework.context.annotation.Configuration
public class SocketIOServerConfiguration {
    private static final String SOCKET_HOST = "0.0.0.0";
    private static final int SOCKET_PORT = 8000;

    private SocketIOServer server;

    public SocketIOServerConfiguration(){
        Configuration configuration = new Configuration();
        configuration.setHostname(SOCKET_HOST);
        configuration.setPort(SOCKET_PORT);

        server = new SocketIOServer(configuration);
        server.start();

        server.addConnectListener(new ConnectListener() {
            @Override
            public void onConnect(SocketIOClient socketIOClient) {
                System.out.println("Client Connected " + socketIOClient.getSessionId());
            }
        });
    }

    @PreDestroy
    public void preDestroy(){
        server.stop();
    }
}
