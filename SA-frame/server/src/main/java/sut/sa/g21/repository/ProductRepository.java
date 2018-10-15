package sut.sa.g21.repository;

import sut.sa.g21.entity.Product;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
    public
    interface ProductRepository extends JpaRepository<Product, Long> {
        List<Product> findByProductNameContainingIgnoreCase(String productName);
}