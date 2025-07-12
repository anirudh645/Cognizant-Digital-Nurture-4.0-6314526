package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource("classpath:country.xml")
public class SpringlearnApplication {
    private static Logger log = LoggerFactory.getLogger(SpringlearnApplication.class);
    public static void main(String[] args) {
        log.info("Spring Boot Application Started");
        SpringApplication.run(SpringlearnApplication.class, args);
    }

}
