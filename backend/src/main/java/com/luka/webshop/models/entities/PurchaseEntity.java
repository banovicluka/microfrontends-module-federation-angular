package com.luka.webshop.models.entities;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "purchase")
public class PurchaseEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "payment_method")
    private String paymentMethod;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private UserEntity user;
    @OneToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id", nullable = false)
    private ProductEntity product;

}
