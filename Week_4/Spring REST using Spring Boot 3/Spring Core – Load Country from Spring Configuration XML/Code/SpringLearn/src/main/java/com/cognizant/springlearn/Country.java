package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {
    private static final Logger logger = LoggerFactory.getLogger(Country.class);
    private String name;
    private String code;

    //Empty Constructor
    public Country() {
        logger.info("Inside Country Constructor");
    }

    @Override
    public String toString() {
        logger.info("Country Details: {}-{}", name,code);
        return "Country{" +
                "name='" + name + '\'' +
                ", code='" + code + '\'' +
                '}';
    }

    public String getName() {
        logger.info("get country name");
        return name;
    }

    public void setName(String name) {
        logger.info("set country name");
        this.name = name;
    }

    public String getCode() {
        logger.info("get country code");
        return code;
    }

    public void setCode(String code) {
        logger.info("set country code");
        this.code = code;
    }
}