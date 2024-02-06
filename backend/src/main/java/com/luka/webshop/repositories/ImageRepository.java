package com.luka.webshop.repositories;

import com.luka.webshop.models.entities.ImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<ImageEntity,Integer> {
}
