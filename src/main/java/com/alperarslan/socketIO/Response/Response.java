package com.alperarslan.socketIO.Response;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class Response {
    private static List<String> responseList = Arrays.asList(
            "Hi, welcome to our company, we are here to assist you. Please contact us on: test@test.com.",
            "Hi, we are here to assist you. Please contact us on: test@test.com.",
            "Hi, welcome to our company. Leave your message and contact e-mail and we will be reaching you at your earliest convenience.");

    private static String connectedResponse = "You are now connected.";

    public static String  getRandomResponse(){
        Random rand = new Random();
        return responseList.get(rand.nextInt(responseList.size()));
    }

    public static String getConnectedResponse(){
        return connectedResponse;
    }

}
