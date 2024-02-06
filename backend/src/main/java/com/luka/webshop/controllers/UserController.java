package com.luka.webshop.controllers;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Product;
import com.luka.webshop.models.dto.User;
import com.luka.webshop.services.EmailService;
import com.luka.webshop.services.ProductService;
import com.luka.webshop.services.UserService;
import org.aspectj.weaver.ast.Not;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
@RequestMapping("/users")
public class UserController {

    private final UserService service;
    private final ProductService productService;

    private final EmailService emailService;

    public UserController(UserService service, ProductService productService, EmailService emailService) {
        this.service = service;
        this.productService = productService;
        this.emailService = emailService;
    }

    @GetMapping("/{id}")
    public User findUserById(@PathVariable Integer id) throws NotFoundException {
        return service.findById(id);
    }

    @GetMapping("/{username}/products")
    public List<Product> findAllProductsOfUser(@PathVariable String username, @RequestParam Map<String,String> filters){
        return productService.findAllByUserUsername(filters, username);
    }

    //STA AKO NE POSTOJI KORISNIK SA TIM USERNAMOM?
    @GetMapping("/{username}/info")
    public User findUserByUsername(@PathVariable String username) throws NotFoundException{
        return service.findUserByUsername(username);
    }

    @GetMapping("/{username}/id")
    public Integer getIdOfUser(@PathVariable String username) throws NotFoundException{
        return service.findIdByUsername(username);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User registerUser(@RequestBody User user) throws NotFoundException{
        return service.registerUser(user);
    }

    @PutMapping("/active")
    public User activateAcc(@RequestBody User user) throws NotFoundException{
        return service.updateAccStatus(user);
    }

    @PostMapping("/email")
    public void resendEmail(@RequestBody User user){
        this.emailService.sendMail(user.getEmail(), "VERIFY YOUR ACCOUNT - WEB SHOP",user.getPin().toString());
    }

    @GetMapping
    public List<User> findAll(){
        return this.service.findAll();
    }

    @PostMapping("/insert")
    public User insert(@RequestBody User user) throws NotFoundException{
        return this.service.insert(user);
    }

    @PutMapping
    public User update(@RequestBody User user) throws NotFoundException{
        return this.service.update(user);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) throws NotFoundException{
        this.service.delete(id);
//        if(findUserById(user.getId()) != null){
//            return "Brisanje neuspjesno";
//        }else return "Brisanje uspjesno";
    }


}
