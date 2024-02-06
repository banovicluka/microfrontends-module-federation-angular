package com.luka.webshop.controllers;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Attribute;
import com.luka.webshop.models.dto.Category;
import com.luka.webshop.services.AttributeService;
import com.luka.webshop.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
@RequestMapping("/categories")
public class CategoryController {
    
    CategoryService service;
    AttributeService attributeService;

    public CategoryController(CategoryService service, AttributeService attributeService) {
        this.service = service;
        this.attributeService = attributeService;
    }

    @GetMapping
    public List<Category> findAll(){
        return service.findAll();
    }

    @GetMapping("/{categoryId}/attributes")
    public List<Attribute> getAllCategoryAttributes(@PathVariable Integer categoryId){
        return this.attributeService.getAllCategoryAttributes(categoryId);
    }

    @GetMapping("/{id}")
    public Category findCategoryById(@PathVariable Integer id) throws NotFoundException {
        return this.service.findById(id);
    }

    @PostMapping
    public Category insert(@RequestBody Category category) throws NotFoundException{
        return this.service.insert(category);
    }

    @PutMapping
    public Category update(@RequestBody Category category) throws NotFoundException{
        return this.service.update(category);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) throws NotFoundException{
        this.service.delete(id);
//        if(findCategoryById(id) != null){
//            return "Brisanje neuspjesno";
//        }else return "Brisanje uspjesno";
    }


}
