/*
package com.example.demo.controller;

import java.util.Collection;
import java.util.stream.Collectors;

import Type;
import TypeRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TypeController{
    private TypeRepository typeRepository;

    public TypeController (TypeRepository typeRepository){
        this.typeRepository = typeRepository;
    }

    @GetMapping("/Types")
    public Collection<Type> type() {
        return typeRepository.findAll().stream().collect(Collectors.toList());
    }
}
*/
