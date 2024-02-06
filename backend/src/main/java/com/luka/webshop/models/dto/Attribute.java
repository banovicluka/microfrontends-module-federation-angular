package com.luka.webshop.models.dto;

import com.luka.webshop.models.entities.CategoryEntity;
import jakarta.persistence.*;
import lombok.Data;

@Data
public class Attribute {

    private Integer id;

    private String name;

    private Category category;
}
