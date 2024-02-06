package com.luka.webshop.models.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Entity
@Table(name = "product")
public class ProductEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "title")
    private String title;
    @Basic
    @Column(name = "description")
    private String description;
    @Basic
    @Column(name = "price")
    private Double price;
    @Basic
    @Column(name = "new")
    private Boolean unused;
    @Basic
    @Column(name = "location")
    private String location;
    @Basic
    @Column(name = "purchased")
    private Boolean purchased;
    @OneToMany(mappedBy = "product")
    private List<CommentEntity> comments;
    @OneToMany(mappedBy = "product")
    private List<ImageEntity> images;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id", nullable = false)
    private CategoryEntity category;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private UserEntity user;
    @OneToOne(mappedBy = "product")
    private PurchaseEntity purchase;
    @OneToMany(mappedBy = "product")
    private List<AttributeValueEntity> attributeValues;
}
