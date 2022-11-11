package com.atlant.auction.service;

import com.atlant.auction.model.Product;
import com.atlant.auction.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getProducts(){
//        Product product = new Product(1L,
//                "Shoes",
//                "Details about shoes",
//                5D,
//                LocalDate.now(),
//                LocalDate.now().plusDays(30),
//                "imageURl");
        return productRepository.findAll();
    }
}
