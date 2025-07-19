package com.cognizant.loans.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class LoanController {
    private static final Logger logger = LoggerFactory.getLogger(LoanController.class);
    @GetMapping("/loans/{number}")
    public Map<String, String> getLoan(@PathVariable("number") String number){
        logger.info("Get loan by number: " + number);
        Map<String, String> loanData = new HashMap<>();
        loanData.put("number", number);
        loanData.put("type", "car");
        loanData.put("loan", "400000");
        loanData.put("tenure", "18");

        System.out.println("Request from account number : " + number);
        System.out.println("It's details are (dummy) : " + loanData);
        logger.info("Request from account number : " + number);
        return loanData;
    }
}
