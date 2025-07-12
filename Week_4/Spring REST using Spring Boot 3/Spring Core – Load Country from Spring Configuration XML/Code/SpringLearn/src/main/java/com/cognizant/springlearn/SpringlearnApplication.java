package com.cognizant.springlearn;

import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.slf4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

@SpringBootApplication
public class SpringlearnApplication {
    private static final Logger logger = LoggerFactory.getLogger(SpringlearnApplication.class);
    public static void main(String[] args) {
        logger.info("Spring Boot Application Started");
        //calling the displayCountry method to display country details
        displayCountry();
        logger.info("Spring Boot Application ended");
    }
    public static void displayCountry() {
        //Creating the application context from XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countryList = context.getBean("countryList", List.class);

        // Logging all the countries of the country list
        countryList.forEach(country -> logger.debug("Country: {}", country.toString()));


    }
}
