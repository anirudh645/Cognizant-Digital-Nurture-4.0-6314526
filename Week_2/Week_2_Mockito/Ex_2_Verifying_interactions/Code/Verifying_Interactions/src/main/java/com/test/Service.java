package com.test;

public class Service{
    private final ExternalAPI externalAPI;

    public Service(ExternalAPI externalAPI) {
        this.externalAPI = externalAPI;
    }

    public String processData() {
        String data = externalAPI.getData();
        // Process the data as needed
        return "Processed: " + data;
    }
}
