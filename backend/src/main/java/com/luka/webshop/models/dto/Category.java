package com.luka.webshop.models.dto;

import com.luka.webshop.models.entities.AttributeEntity;
import com.luka.webshop.models.entities.ProductEntity;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
public class Category {


    private Integer id;

    private String name;

    //private List<AttributeEntity> attributes;

    //private List<ProductEntity> products;

}
