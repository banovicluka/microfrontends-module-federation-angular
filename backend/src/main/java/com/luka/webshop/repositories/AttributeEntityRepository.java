package com.luka.webshop.repositories;

import com.luka.webshop.models.entities.AttributeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AttributeEntityRepository extends JpaRepository<AttributeEntity, Integer> {

    List<AttributeEntity> getAllByCategory_Id(Integer id);
}
