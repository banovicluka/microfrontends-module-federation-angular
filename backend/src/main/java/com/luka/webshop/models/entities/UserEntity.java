package com.luka.webshop.models.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Entity
@Table(name = "user")
public class UserEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "first_name")
    private String firstName;
    @Basic
    @Column(name = "last_name")
    private String lastName;
    @Basic
    @Column(name = "city")
    private String city;
    @Basic
    @Column(name = "avatar")
    private String avatar;
    @Basic
    @Column(name = "email")
    private String email;
    @Basic
    @Column(name = "pin")
    private Integer pin;
    @Basic
    @Column(name = "active")
    private Boolean active;
    @OneToMany(mappedBy = "user")
    private List<CommentEntity> comments;
    @OneToMany(mappedBy = "user")
    private List<MessageEntity> messages;
    @OneToMany(mappedBy = "user")
    private List<ProductEntity> products;
    @OneToMany(mappedBy = "user")
    private List<PurchaseEntity> purchases;
    @Basic
    @Column(name = "username")
    private String username;
    @Basic
    @Column(name= "password")
    private String password;


}
