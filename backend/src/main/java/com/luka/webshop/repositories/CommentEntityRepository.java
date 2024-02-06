package com.luka.webshop.repositories;

import com.luka.webshop.models.entities.CommentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentEntityRepository extends JpaRepository<CommentEntity,Integer> {

    List<CommentEntity> getAllByProduct_Id(Integer id);
}
