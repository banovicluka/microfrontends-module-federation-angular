package com.luka.webshop.services;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Attribute;
import com.luka.webshop.models.dto.AttributeValue;
import com.luka.webshop.models.dto.Category;

import java.util.List;

public interface AttributeService {

    List<Attribute> getAllCategoryAttributes(Integer categoryId);

    AttributeValue insertValue(AttributeValue attributeValue) throws NotFoundException;

    AttributeValue findAttributeValueById(Integer id) throws NotFoundException;

    public Attribute update(Attribute attribute) throws NotFoundException;
    public Attribute insert(Attribute attribute) throws NotFoundException;

    void delete(Integer id) throws NotFoundException;
    public List<Attribute> findAllByCategoryId(Integer id);

    public Attribute findById(Integer id) throws NotFoundException;

}
