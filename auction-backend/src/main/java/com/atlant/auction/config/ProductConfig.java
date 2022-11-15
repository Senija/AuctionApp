package com.atlant.auction.config;

import com.atlant.auction.model.Category;
import com.atlant.auction.model.Product;
import com.atlant.auction.repository.CategoryRepository;
import com.atlant.auction.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class ProductConfig {
    @Bean
    CommandLineRunner commandLineRunner(ProductRepository repository, CategoryRepository categoryRepository){
        return args ->{
            Category fashion = new Category("Fashion", null);
            Category accessories = new Category("Shoes", null);
            Category jewlery = new Category("Jewlery", null);
            Category shoes = new Category("Shoes", null);
            Category sportware = new Category("Sportware", null);
            Category home = new Category("Home", null);
            Category electronics = new Category("Electronics", null);
            Category mobile = new Category("Mobile", null);
            Category computer = new Category("Computer", null);
            Product shoesP = new Product("Shoes", "Details about shoes",
                    5D,
                    LocalDate.now(),
                    LocalDate.now().plusDays(30),
                    "imageURl", fashion);
            Product shirt = new Product("shirt", "Details about shirt",
                    5D,
                    LocalDate.now(),
                    LocalDate.now().plusDays(30),
                    "imageURl", fashion);
            categoryRepository.saveAll(List.of(fashion,accessories, jewlery, shoes, sportware, home, electronics, mobile,
                    computer));
            repository.saveAll(List.of(shoesP, shirt));

        };
    }
}
