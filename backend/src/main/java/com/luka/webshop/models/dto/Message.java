package com.luka.webshop.models.dto;

import com.luka.webshop.models.entities.OperatorEntity;
import com.luka.webshop.models.entities.UserEntity;
import jakarta.persistence.*;
import lombok.Data;

@Data
public class Message {

    private Integer id;

    private String subject;

    private String content;

    private String seen;

    private Integer operatorId;

    private Integer userId;

    private String userUsername;

}
