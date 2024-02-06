package com.luka.webshop.services;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Image;

public interface ImageService {

    Image findById(Integer id) throws NotFoundException;

    Image insertImage(Image image) throws NotFoundException;
}
