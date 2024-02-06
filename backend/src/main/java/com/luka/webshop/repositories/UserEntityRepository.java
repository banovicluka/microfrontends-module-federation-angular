package com.luka.webshop.repositories;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.entities.ProductEntity;
import com.luka.webshop.models.entities.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserEntityRepository extends JpaRepository<UserEntity,Integer> {
    UserEntity findByUsername(String username);

    @Query("SELECT u.id FROM UserEntity u WHERE u.username = :username")
    Integer findIdByUsername(@Param("username") String username);

}
