package com.luka.webshop.models.dto;

import com.luka.webshop.models.entities.AttributeEntity;
import com.luka.webshop.models.entities.ProductEntity;
import jakarta.persistence.*;
import lombok.Data;

@Data
public class AttributeValue {

    private Integer id;

    private String value;

    private Integer productId;

    private Integer attributeId;
}
