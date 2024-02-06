package com.luka.webshop.services;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Log;

import java.util.List;

public interface LogService {

    Log findById(Integer id) throws NotFoundException;

    Log insertLog(Log log) throws NotFoundException;

    public List<Log> findAll();
}
