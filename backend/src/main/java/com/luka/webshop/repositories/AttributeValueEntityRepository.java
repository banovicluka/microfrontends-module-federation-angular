package com.luka.webshop.repositories;

import com.luka.webshop.models.entities.AttributeEntity;
import com.luka.webshop.models.entities.AttributeValueEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttributeValueEntityRepository extends JpaRepository<AttributeValueEntity, Integer> {
}
