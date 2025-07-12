package com.cognizant.springlearn.Controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    private static final Logger logger = LoggerFactory.getLogger(HelloController.class);
    @GetMapping("/hello")
    public String sayHello(){
        //Logging the start and end of the method as required
        logger.info("Star: Hello endpoint was called");
        logger.info("End: Returning Hello World response");

        //Returning a simple string response
        return "Hello World!!";
    }
}
