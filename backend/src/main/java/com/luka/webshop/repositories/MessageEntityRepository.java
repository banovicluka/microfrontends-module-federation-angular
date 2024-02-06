package com.luka.webshop.repositories;

import com.luka.webshop.models.entities.MessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageEntityRepository extends JpaRepository<MessageEntity,Integer> {
}
