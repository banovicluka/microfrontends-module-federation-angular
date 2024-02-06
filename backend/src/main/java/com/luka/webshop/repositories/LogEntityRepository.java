package com.luka.webshop.repositories;

import com.luka.webshop.models.entities.LogEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogEntityRepository extends JpaRepository<LogEntity,Integer> {
}
