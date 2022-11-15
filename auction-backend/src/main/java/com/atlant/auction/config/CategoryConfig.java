package com.atlant.auction.config;

import com.atlant.auction.repository.CategoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CategoryConfig {
    @Bean
    CommandLineRunner proba(CategoryRepository repository){
        return arg -> {

        };
    }
}
