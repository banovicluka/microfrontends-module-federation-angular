package com.luka.webshop.controllers;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Product;
import com.luka.webshop.models.dto.Purchase;
import com.luka.webshop.services.ProductService;
import com.luka.webshop.services.PurchaseService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/purchases")
public class PurchaseController {

    private final PurchaseService service;
    private final ProductService productService;

    public PurchaseController(PurchaseService service, ProductService productService) {
        this.service = service;

        this.productService = productService;
    }

    @GetMapping
    public List<Purchase> findAll(){
        return service.findAll();
    }
    @GetMapping("{id}")
    public Purchase findById(@PathVariable Integer id) throws NotFoundException {
        return service.findById(id);
    }

    @GetMapping("products/{id}")
    public List<Product> findAllPurchasedProductsByUserId(@PathVariable Integer id, @RequestParam Map<String,String> filters){
       return this.productService.findAll(filters).stream().filter(l-> (l.getPurchase() != null) && (l.getPurchase().getUserId() == id))
                .collect(Collectors.toList());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Purchase insert(@RequestBody Purchase purchase) throws NotFoundException {
        return service.insert(purchase);
    }
}
