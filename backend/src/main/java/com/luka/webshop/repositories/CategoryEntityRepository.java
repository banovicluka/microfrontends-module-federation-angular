package com.luka.webshop.repositories;

import com.luka.webshop.models.entities.CategoryEntity;
import com.luka.webshop.services.CategoryService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryEntityRepository extends JpaRepository<CategoryEntity,Integer> {

}
