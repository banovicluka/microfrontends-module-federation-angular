package com.luka.webshop.models.dto;

import com.luka.webshop.models.entities.ProductEntity;
import com.luka.webshop.models.entities.UserEntity;
import jakarta.persistence.*;
import lombok.Data;

@Data
public class Comment {

    private Integer id;

    private String question;

    private String answer;

    private Integer productId;

    private Integer userId;
}
