package com.cognizant.springlearn.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {
    private String name;
    private String code;
    private static final Logger log = LoggerFactory.getLogger(Country.class);
    @Override
    public String toString() {
        log.info("toString() called for Country: {}", this);
        return "Country{" +
                "name='" + name + '\'' +
                ", code='" + code + '\'' +
                '}';
    }

    public String getName() {
        log.info("getName() called:{}", name);
        return name;
    }

    public void setName(String name) {
        log.info("setName() called:{}", name);
        this.name = name;
    }

    public String getCode() {
        log.info("getCode() called: {}", code);
        return code;
    }

    public void setCode(String code) {
        log.info("setCode() called: {}", code);
        this.code = code;
    }
}
