package com.cognizant.springlearn.controller;


import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {
    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public ResponseEntity<Country> getCountry(@PathVariable String code){
        Country c = countryService.getCountry(code);
        return c!=null?
                ResponseEntity.ok(c):
                ResponseEntity.notFound().build();
    }
}
