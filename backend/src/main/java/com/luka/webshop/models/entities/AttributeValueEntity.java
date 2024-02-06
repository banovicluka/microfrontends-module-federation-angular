package com.luka.webshop.models.entities;

import com.luka.webshop.models.dto.Attribute;
import jakarta.persistence.*;
import lombok.*;
@Data
@Entity
@Table(name = "attribute_value")
public class AttributeValueEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "value")
    private String value;
    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id", nullable = false)
    private ProductEntity product;
    @ManyToOne
    @JoinColumn(name = "attribute_id", referencedColumnName = "id", nullable = false)
    private AttributeEntity attribute;
}
