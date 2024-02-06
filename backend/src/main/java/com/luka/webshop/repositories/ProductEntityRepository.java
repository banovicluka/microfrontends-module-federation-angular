package com.luka.webshop.repositories;

import com.luka.webshop.models.dto.Comment;
import com.luka.webshop.models.entities.CategoryEntity;
import com.luka.webshop.models.entities.ProductEntity;
import com.luka.webshop.models.entities.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductEntityRepository extends JpaRepository<ProductEntity,Integer> {
    List<ProductEntity> getAllByUser_Username(String username);

    Page<ProductEntity> findAll(Pageable pageable);


}
