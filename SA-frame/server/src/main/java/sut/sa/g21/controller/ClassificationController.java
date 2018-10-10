/*
package com.example.demo.controller;

import java.util.Collection;
import java.util.stream.Collectors;

import Classification;
import ClassificationRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ClassificationController{
    private ClassificationRepository classificationRepository;
    public ClassificationController(ClassificationRepository classificationRepository){
        this.classificationRepository = classificationRepository;
    }

    @GetMapping("/Classification")
    public Collection<Classification> classification() {
        return classificationRepository.findAll().stream().collect(Collectors.toList());
    }
}
*/
