package com.luka.webshop.controllers;


import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Comment;
import com.luka.webshop.services.CommentService;
import org.aspectj.weaver.ast.Not;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/comments")
public class CommentController {

    private final CommentService service;


    public CommentController(CommentService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Comment insert(@RequestBody Comment commentRequest) throws NotFoundException{
        return service.insert(commentRequest);
    }

    @PutMapping("/{id}")
    public Comment update(@PathVariable Integer id, @RequestBody Comment commentRequest) throws NotFoundException{
        return service.update(id,commentRequest);
    }
}
