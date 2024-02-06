package com.luka.webshop.models.dto;

import jakarta.persistence.Basic;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class Image {

    private Integer id;

    private String path;

    private Integer productId;
}
