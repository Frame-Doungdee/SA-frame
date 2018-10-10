/*
package com.example.demo.controller;
import Product;
import ClassificationRepository;
import CountryRepository;
import ProductRepository;
import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController{
    @Autowired   private final ProductRepository    productRepository;
    @Autowired   private       CountryRepository   countryRepository;
    @Autowired   private       ClassificationRepository    classificationRepository;

    ProductController(ProductRepository    repository) {
        this.productRepository = repository;
    }

    @GetMapping("/Product")
    public Collection<Product> product() {
        return productRepository.findAll().stream().collect(Collectors.toList());
    }

    @GetMapping("/Product/{Product_id}")
    public Optional<Product> Views(@PathVariable Long Product_id) {
        return productRepository.findById(Product_id);
    }
}
*/
