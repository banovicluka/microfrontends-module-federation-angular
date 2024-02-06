package com.luka.webshop.controllers;
import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Image;
import com.luka.webshop.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/images")
public class ImageController {

    final
    ImageService service;

    public ImageController(ImageService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Image insert(@RequestBody Image image) throws NotFoundException {
        return this.service.insertImage(image);
    }
}
