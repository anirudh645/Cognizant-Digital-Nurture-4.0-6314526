package com.cognizant.accounts.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AccountsController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello from Accounts Service!";
    }
    @GetMapping("/accounts/{number}")
    public Map<String, String> getLoan(@PathVariable("number") String number){
        Map<String, String> accountDetails = new HashMap<>();
        accountDetails.put("number", number);
        accountDetails.put("type", "savings");
        accountDetails.put("balance", "12050");

        System.out.println("Request from account number : " + number);
        System.out.println("It's details are (dummy) : " + accountDetails);
        return accountDetails;
    }
}
