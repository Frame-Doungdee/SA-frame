/*
package com.example.demo.controller;

import java.util.Collection;
import java.util.stream.Collectors;

import Country;
import CountryRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CountryController{
    private CountryRepository countryRepository;

    public CountryController(CountryRepository repo){
        this.countryRepository = repo;
    }

    @GetMapping("/Country")
    public Collection<Country> product() {
        return countryRepository.findAll().stream().collect(Collectors.toList());
    }
}
*/
