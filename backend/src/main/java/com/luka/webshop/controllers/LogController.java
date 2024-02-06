package com.luka.webshop.controllers;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Log;
import com.luka.webshop.services.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
@RequestMapping("/logs")
public class LogController {

    private final LogService service;

    public LogController(LogService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> insertLog(@RequestBody Log log) throws NotFoundException {
            this.service.insertLog(log);
            return ResponseEntity.ok("Log je uspjesno smjesten");
    }

    @GetMapping
    public List<Log> findAll(){
        return this.service.findAll();
    }
}
