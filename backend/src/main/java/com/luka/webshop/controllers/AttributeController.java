package com.luka.webshop.controllers;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Attribute;
import com.luka.webshop.models.dto.AttributeValue;
import com.luka.webshop.services.AttributeService;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
@RequestMapping("/attributes")
public class AttributeController {

    @Autowired
    private AttributeService attributeService;

    @PostMapping("/values")
    @ResponseStatus(HttpStatus.CREATED)
    public AttributeValue insertAttributeValue(@RequestBody AttributeValue attributeValue) throws NotFoundException {
        return this.attributeService.insertValue(attributeValue);

    }

    @GetMapping("/categoryId/{id}")
    public List<Attribute> findAllByCategoryId(@PathVariable Integer id){
        return this.attributeService.findAllByCategoryId(id);
    }
    @GetMapping("/{id}")
    public Attribute findById(@PathVariable Integer id) throws NotFoundException{
        return this.attributeService.findById(id);
    }

    @PostMapping
    public Attribute insert(@RequestBody Attribute attribute) throws NotFoundException {
        return this.attributeService.insert(attribute);
    }

    @PutMapping
    public Attribute update(@RequestBody Attribute attribute) throws NotFoundException{
        return this.attributeService.update(attribute);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) throws NotFoundException{
        this.attributeService.delete(id);
//        if(findById(attribute.getId()) != null){
//            return "Brisanje neuspjesno";
//        }else return "Brisanje uspjesno";
    }


}
