package com.luka.webshop.models.dto;

import com.luka.webshop.models.entities.*;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
public class ProductDetails {

    private Integer id;

    private String title;

    private String description;

    private Double price;

    private Boolean unused;

    private String location;

    private Boolean purchased;

    private List<Comment> comments;

    private List<Image> images;

    private String categoryName;

    private String userUsername;

    private Integer userId;

    private Purchase purchase;
}
