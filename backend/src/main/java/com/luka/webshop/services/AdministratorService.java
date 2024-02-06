package com.luka.webshop.services;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Administrator;
import com.luka.webshop.models.dto.LoginRequest;

import java.util.List;

public interface AdministratorService {

    List<Administrator> findAll();

    Administrator findById(Integer id) throws NotFoundException;

    Administrator create(Administrator administrator);

    void delete(Administrator administrator);

    //Administrator findByUsernameAndPassword(String username, String password) throws NotFoundException;

    Administrator login(LoginRequest loginRequest) throws NotFoundException;
}
