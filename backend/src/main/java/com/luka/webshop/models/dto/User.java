package com.luka.webshop.models.dto;

import lombok.Data;

@Data
public class User {

    private Integer id;

    private String firstName;

    private String lastName;

    private String city;

    private String avatar;

    private String email;

    private Integer pin;

    private Boolean active;

//    private List<CommentEntity> comments;
//
//    private List<MessageEntity> messages;
//
//    private List<ProductEntity> products;
//
//    private List<PurchaseEntity> purchases;

    private String username;

    private String password;

}
