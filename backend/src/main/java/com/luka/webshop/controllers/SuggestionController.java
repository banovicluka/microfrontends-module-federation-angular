package com.luka.webshop.controllers;

import com.luka.webshop.services.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/suggestions")
public class SuggestionController {

    private final ProductService productService;

    public SuggestionController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    List<String> getSuggestions(@RequestParam("query") String query){
        List<String> suggestions = productService.getSuggestions(query);
        return suggestions;
    }
}
