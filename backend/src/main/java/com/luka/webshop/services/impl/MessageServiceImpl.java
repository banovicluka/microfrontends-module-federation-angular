package com.luka.webshop.services.impl;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Message;
import com.luka.webshop.models.entities.MessageEntity;
import com.luka.webshop.repositories.MessageEntityRepository;
import com.luka.webshop.services.MessageService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MessageServiceImpl implements MessageService {

    final
    MessageEntityRepository repository;
    final
    ModelMapper mapper;

    public MessageServiceImpl(MessageEntityRepository repository, ModelMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public Message insertMessage(Message message) throws NotFoundException {
        MessageEntity messageEntity = mapper.map(message,MessageEntity.class);
        System.out.println(messageEntity);
        messageEntity = this.repository.saveAndFlush(messageEntity);
        return findById(messageEntity.getId());
    }

    @Override
    public Message findById(Integer id) throws NotFoundException {
        return mapper.map(this.repository.findById(id).orElseThrow(NotFoundException::new),Message.class);
    }

    @Override
    public List<Message> findAll(){
        return this.repository.findAll().stream().map(m-> mapper.map(m,Message.class)).collect(Collectors.toList());
    }

}
