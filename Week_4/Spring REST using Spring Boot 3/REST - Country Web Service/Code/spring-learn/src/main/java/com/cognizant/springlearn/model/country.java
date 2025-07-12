package com.cognizant.springlearn.model;

import com.cognizant.springlearn.SpringLearnApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class country {
    private static final Logger logger = LoggerFactory.getLogger(country.class);
    private String name;
    private String code;

    public String getName() {
        logger.info("Getting country name: {}", name);
        return name;
    }

    @Override
    public String toString() {
        logger.info("Converting country to string: name={}, code={}", name, code);
        return "country{" +
                "name='" + name + '\'' +
                ", code='" + code + '\'' +
                '}';
    }

    public void setName(String name) {
        logger.info("Setting country name: {}", name);
        this.name = name;
    }

    public String getCode() {
        logger.info("Getting country code: {}", code);
        return code;
    }

    public void setCode(String code) {
        logger.info("Setting country code: {}", code);
        this.code = code;
    }
}
