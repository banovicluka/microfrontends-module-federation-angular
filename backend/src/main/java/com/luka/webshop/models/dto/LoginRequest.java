package com.luka.webshop.models.dto;

import lombok.Data;

@Data
public class LoginRequest {
    public String username;
    public String password;
}
