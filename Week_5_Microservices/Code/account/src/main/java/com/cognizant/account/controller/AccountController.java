package com.cognizant.account.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AccountController {
    private static final Logger logger = LoggerFactory.getLogger("AccountController.class");

    @GetMapping("/accounts/{number}")
    public Map<String, String> getLoan(@PathVariable("number") String number){
        logger.info("get account by number: " + number);
        Map<String, String> accountDetails = new HashMap<>();
        accountDetails.put("number", number);
        accountDetails.put("type", "savings");
        accountDetails.put("balance", "12050");

        System.out.println("Request from account number : " + number);
        System.out.println("It's details are (dummy) : " + accountDetails);

        logger.info("Returning account data: {}", accountDetails);
        return accountDetails;
    }
}
