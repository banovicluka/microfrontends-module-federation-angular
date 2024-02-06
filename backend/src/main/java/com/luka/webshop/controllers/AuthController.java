package com.luka.webshop.controllers;

import com.luka.webshop.models.dto.JwtResponse;
import com.luka.webshop.models.dto.LoginRequest;
import com.luka.webshop.security.JwtAuthEntryPoint;
import com.luka.webshop.security.JwtGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/login")
public class AuthController {

    AuthenticationManager authenticationManager;

    JwtGenerator jwtGenerator;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, JwtGenerator jwtGenerator){
        this.authenticationManager=authenticationManager;
        this.jwtGenerator=jwtGenerator;
    }

    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            System.out.println(loginRequest.getUsername()+ " " + loginRequest.getPassword());
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );
            System.out.println("a");
            String token = jwtGenerator.generateToken(authentication);
            System.out.println("b");
            System.out.println(token);
            //return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(new JwtResponse(token));
            return  ResponseEntity.ok(new JwtResponse(token,loginRequest.username));
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}
