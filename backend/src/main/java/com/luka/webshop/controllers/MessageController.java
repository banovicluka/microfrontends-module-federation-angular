package com.luka.webshop.controllers;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Message;
import com.luka.webshop.models.dto.Reply;
import com.luka.webshop.models.dto.User;
import com.luka.webshop.services.MessageService;
import com.luka.webshop.services.UserService;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.Properties;

//import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.Authenticator;

import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;

import java.util.List;

@RestController
@CrossOrigin(origins ={"http://localhost:4200","http://localhost:4201", "http://localhost:4202"})
@RequestMapping("/messages")
public class MessageController {

    final
    MessageService service;
    UserService userService;

    public MessageController(MessageService service, UserService userService) {
        this.service = service;
        this.userService = userService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Message addMessage(@RequestBody Message message) throws NotFoundException{
        return this.service.insertMessage(message);
    }

    @GetMapping
    public List<Message> findAll(){
        return this.service.findAll();
    }

    @PostMapping("/reply/{userId}")
    @ResponseStatus(HttpStatus.CREATED)
    public void sendReply(@PathVariable Integer userId, @RequestBody Reply reply) throws NotFoundException {
        System.out.println("000");
        User user = this.userService.findById(userId);
        System.out.println("111");

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
                new Authenticator()
                {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication("banovic456@gmail.com", "cgwidwvizkwaxtfd");
                    }
                });

        try {
            javax.mail.Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("banovic456@gmail.com"));
            message.setRecipients(javax.mail.Message.RecipientType.TO,
                    InternetAddress.parse(user.getEmail()));
            message.setSubject("Reply to Your Message - WEB SHOP");
            message.setText(reply.getContent());

            Transport.send(message);
            System.out.println("as");


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
