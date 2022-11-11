package com.atlant.auction.config;

import com.atlant.auction.model.Product;
import com.atlant.auction.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class ProductConfig {
    @Bean
    CommandLineRunner commandLineRunner(ProductRepository repository){
        return args ->{
            Product shoes = new Product("Shoes", "Details about shoes",
                    5D,
                    LocalDate.now(),
                    LocalDate.now().plusDays(30),
                    "imageURl");
            Product shirt = new Product("shirt", "Details about shirt",
                    5D,
                    LocalDate.now(),
                    LocalDate.now().plusDays(30),
                    "imageURl");
            repository.saveAll(List.of(shoes, shirt));
        };
    }
}
