package com.luka.webshop.services;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Comment;

import java.util.List;

public interface CommentService {

     Comment update(Integer id, Comment commentRequest) throws NotFoundException;
     Comment insert(Comment commentRequest) throws NotFoundException;

     List<Comment> findAllCommentsByProductId(Integer id);
}
