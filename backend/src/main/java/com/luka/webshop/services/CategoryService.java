package com.luka.webshop.services;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Category;
import com.luka.webshop.models.entities.CategoryEntity;
import org.aspectj.weaver.ast.Not;

import java.util.List;

public interface CategoryService {
    List<Category> findAll();
    Category findById(Integer id) throws NotFoundException;

    Category insert(Category category) throws NotFoundException;

    void delete(Integer id) throws NotFoundException;

    Category update(Category category) throws NotFoundException;
}
