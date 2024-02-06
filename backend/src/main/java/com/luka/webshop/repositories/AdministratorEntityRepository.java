package com.luka.webshop.repositories;

import com.luka.webshop.models.entities.AdministratorEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AdministratorEntityRepository extends JpaRepository<AdministratorEntity,Integer> {
//    default AdministratorEntity findByUsernameAndPassowrd(){
//    }
    public AdministratorEntity findByUsernameAndPassword(String username, String password);
}
