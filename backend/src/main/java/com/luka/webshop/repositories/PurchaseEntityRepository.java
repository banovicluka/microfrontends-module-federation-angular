package com.luka.webshop.repositories;

import com.luka.webshop.models.entities.PurchaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseEntityRepository extends JpaRepository<PurchaseEntity,Integer> {

    PurchaseEntity getPurchaseEntityByProduct_Id(Integer productId);
}
