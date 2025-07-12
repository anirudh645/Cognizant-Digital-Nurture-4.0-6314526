package com.cognizant.springlearn.Controller;


import com.cognizant.springlearn.SpringLearnApplication;
import com.cognizant.springlearn.model.country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {
    private static final Logger logger = LoggerFactory.getLogger(CountryController.class);
    @Autowired
    private country country;// Autowired country bean from XML configuration
    @RequestMapping("/country")
    public country getCountryIndia(){
        logger.info("Inside getCountryIndia");
        return country;
    }
}
