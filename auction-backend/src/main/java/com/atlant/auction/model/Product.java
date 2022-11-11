package com.atlant.auction.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
@Entity
@Table
public class Product {
    @Id
    @SequenceGenerator(
            name="product_sequence",
            sequenceName = "product_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "product_sequence"
    )
    private Long id;
    private String name;
    private String details;
    private Double minimalBid;
    private LocalDate creationDate;
    private LocalDate closingDate;
    private String imageUrl;

    public Product() {
    }

    public Product(Long id, String name, String details, Double minimalBid, LocalDate creationDate, LocalDate closingDate, String imageUrl) {
        this.id = id;
        this.name = name;
        this.details = details;
        this.minimalBid = minimalBid;
        this.creationDate = creationDate;
        this.closingDate = closingDate;
        this.imageUrl = imageUrl;
        //sa svime konstruktor
    }

    public Product(String name, String details, Double minimalBid, LocalDate creationDate, LocalDate closingDate, String imageUrl) {
        this.name = name;
        this.details = details;
        this.minimalBid = minimalBid;
        this.creationDate = creationDate;
        this.closingDate = closingDate;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public Double getMinimalBid() {
        return minimalBid;
    }

    public void setMinimalBid(Double minimalBid) {
        this.minimalBid = minimalBid;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDate getClosingDate() {
        return closingDate;
    }

    public void setClosingDate(LocalDate closingDate) {
        this.closingDate = closingDate;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", details='" + details + '\'' +
                ", minimalBid=" + minimalBid +
                ", creationDate=" + creationDate +
                ", closingDate=" + closingDate +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
