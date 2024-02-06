package com.luka.webshop.models.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Data
public class Log {


    private Integer idlog;

    private String username;

    private Timestamp date;

    private String action;

}
