package com.luka.webshop.controllers;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Comment;
import com.luka.webshop.models.dto.Product;
import com.luka.webshop.models.dto.ProductDetails;
import com.luka.webshop.models.dto.PublishingProduct;
import com.luka.webshop.services.CommentService;
import com.luka.webshop.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;
    @Autowired
    private CommentService commentService;

    @GetMapping
    public Page<Product> findAll(@RequestParam Map<String,String> filters, Pageable pageable){
        return service.findAllPagination(filters,pageable);
    }

    @GetMapping("/{id}")
    public ProductDetails findById(@PathVariable Integer id) throws NotFoundException {
        return service.findById(id);
    }

    @GetMapping("/{id}/comments")
    public List<Comment> findAllCommentsByProduct(@PathVariable Integer id){
        return commentService.findAllCommentsByProductId(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductDetails addProduct(@RequestBody PublishingProduct product) throws NotFoundException {
        return service.insert(product);
    }

    @PostMapping("/{id}/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public Comment insert(@PathVariable Integer id, @RequestBody Comment commentRequest) throws NotFoundException{
        return commentService.insert(commentRequest);
    }

    @PutMapping("/{productId}/comments/{commentId}")
    public Comment update(@PathVariable Integer productId,@PathVariable Integer commentId, @RequestBody Comment commentRequest) throws NotFoundException{
        return commentService.update(commentId,commentRequest);
    }


}
