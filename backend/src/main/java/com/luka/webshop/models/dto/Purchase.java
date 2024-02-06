package com.luka.webshop.models.dto;

import com.luka.webshop.models.entities.ProductEntity;
import com.luka.webshop.models.entities.UserEntity;
import jakarta.persistence.*;
import lombok.Data;

@Data
public class Purchase {


    private Integer id;

    private String paymentMethod;

    private Integer userId;

    private Integer productId;
}
