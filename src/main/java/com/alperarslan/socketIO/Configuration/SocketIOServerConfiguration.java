package com.alperarslan.socketIO.Configuration;

import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;

import javax.annotation.PreDestroy;

@org.springframework.context.annotation.Configuration
public class SocketIOServerConfiguration {
    private static final String SOCKET_HOST = "localhost";
    private static final int SOCKET_PORT = 8000;

    private SocketIOServer server;

    @Bean
    public SocketIOServer ServerConfiguration(){
        Configuration configuration = new Configuration();
        configuration.setHostname(SOCKET_HOST);
        configuration.setPort(SOCKET_PORT);
        configuration.setOrigin("http://localhost:3000");

        server = new SocketIOServer(configuration);

        server.start();

        return server;
    }

    @PreDestroy
    public void preDestroy(){
        server.stop();
    }
}
