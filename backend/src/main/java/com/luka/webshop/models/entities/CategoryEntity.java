package com.luka.webshop.models.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Entity
@Table(name = "category")
public class CategoryEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "name")
    private String name;
    @OneToMany(mappedBy = "category")
    private List<AttributeEntity> attributes;
    @OneToMany(mappedBy = "category")
    private List<ProductEntity> products;


}
