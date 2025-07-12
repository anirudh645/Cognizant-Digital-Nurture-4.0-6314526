package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {
    private final List<Country> countries;
    @Autowired
    public CountryService(@Qualifier("countries") List<Country> countries) {
        this.countries = countries;
    }
    public Country getCountry(String code){
        return  countries.stream()
                .filter(country -> country.getCode().equals(code))
                .findFirst()
                .orElse(null);
    }
}
