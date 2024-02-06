package com.luka.webshop.controllers;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Administrator;
import com.luka.webshop.models.dto.LoginRequest;
import com.luka.webshop.services.AdministratorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:4201","http://localhost:4202"})
@RequestMapping("/administrators")
public class AdministratorController {

    private final AdministratorService service;

    public AdministratorController(AdministratorService service) {
        this.service = service;
    }

    @GetMapping
    public List<Administrator> findAll(){
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Administrator findById(@PathVariable Integer id) throws NotFoundException {
        return service.findById(id);
    }

    @PostMapping
    public Administrator login(@RequestBody LoginRequest loginRequest) throws NotFoundException {
        return service.login(loginRequest);
    }




}
