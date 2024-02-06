package com.luka.webshop.services;

public interface EmailService {
    void sendMail(String to, String subject, String text);
}
