package com.luka.webshop.models.dto;

import jakarta.persistence.*;
import lombok.Data;

@Data
public class Administrator {

    private Integer id;

    private String firstName;

    private String lastName;

    private String username;

    private String password;

}
