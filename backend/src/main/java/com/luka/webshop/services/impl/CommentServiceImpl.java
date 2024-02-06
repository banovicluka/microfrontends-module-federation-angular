package com.luka.webshop.services.impl;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Comment;
import com.luka.webshop.models.entities.CommentEntity;
import com.luka.webshop.repositories.CommentEntityRepository;
import com.luka.webshop.services.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    private final ModelMapper mapper;
    private final CommentEntityRepository repository;

    public CommentServiceImpl(ModelMapper mapper, CommentEntityRepository repository) {
        this.mapper = mapper;
        this.repository = repository;
    }

    public Comment findById(Integer id) throws NotFoundException {
        return mapper.map(this.repository.findById(id).orElseThrow(NotFoundException::new),Comment.class);
    }

    @Override
    public Comment update(Integer id, Comment commentRequest) throws NotFoundException {
        CommentEntity commentEntity = mapper.map(commentRequest,CommentEntity.class);
        commentEntity.setId(id);
        commentEntity = repository.saveAndFlush(commentEntity);
        return findById(commentEntity.getId());
    }

    @Override
    public Comment insert(Comment commentRequest) throws NotFoundException {
        CommentEntity commentEntity = mapper.map(commentRequest,CommentEntity.class);
        commentEntity = repository.saveAndFlush(commentEntity);
        return findById(commentEntity.getId());
    }

    @Override
    public List<Comment> findAllCommentsByProductId(Integer id) {
        return repository.getAllByProduct_Id(id).stream().map(l -> mapper.map(l,Comment.class)).collect(Collectors.toList());
    }


}
