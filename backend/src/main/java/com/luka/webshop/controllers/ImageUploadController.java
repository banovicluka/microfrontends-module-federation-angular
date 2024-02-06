package com.luka.webshop.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/upload")
public class ImageUploadController {

    @PostMapping
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file){
        try{
            if(!file.isEmpty()){
                File uploadDir = new File("/Users/Luka/ip2023/src/assets/images/");
            }

            String originalFileName = file.getOriginalFilename();

            String uniqueFileName = UUID.randomUUID().toString() + "_" + originalFileName;

            File destFile = new File("/Users/Luka/ip2023/src/assets/images/" + uniqueFileName);

            file.transferTo(destFile);

            return ResponseEntity.ok(uniqueFileName);

        }catch (IOException ex){
            ex.printStackTrace();
            //RIJESITI OVO SA RESPONSE STATUSOM
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred during file upload.");
        }
    }
}
