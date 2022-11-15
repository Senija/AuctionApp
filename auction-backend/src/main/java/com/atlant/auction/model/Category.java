package com.atlant.auction.model;

import javax.persistence.*;

@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_seq")
    @SequenceGenerator(name = "category_seq")
    @Column(name = "id", nullable = false)
    private Long id;



    @Column(name = "category_name")
    private String categoryName;

    @ManyToOne
    @JoinColumn(name = "parent_category_id")
    private Category parentCategory;

    public Category() {
    }

    public Category(Long id, String categoryName, Category parentCategory) {
        this.id = id;
        this.categoryName = categoryName;
        this.parentCategory = parentCategory;
    }

    public Category(String categoryName, Category parentCategory) {
        this.categoryName = categoryName;
        this.parentCategory = parentCategory;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Category getParentCategory() {
        return parentCategory;
    }

    public void setParentCategory(Category parentCategory) {
        this.parentCategory = parentCategory;
    }
}