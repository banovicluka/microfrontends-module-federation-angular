package com.luka.webshop.services.impl;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Log;
import com.luka.webshop.models.entities.LogEntity;
import com.luka.webshop.repositories.LogEntityRepository;
import com.luka.webshop.services.LogService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LogServiceImpl implements LogService {

    final
    LogEntityRepository repository;

    final
    ModelMapper modelMapper;

    public LogServiceImpl(LogEntityRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public Log findById(Integer id) throws NotFoundException {
       return modelMapper.map(this.repository.findById(id).orElseThrow(NotFoundException::new),Log.class);
    }

    @Override
    public List<Log> findAll(){
        return this.repository.findAll().stream().map(l -> modelMapper.map(l,Log.class)).collect(Collectors.toList());
    }

    @Override
    public Log insertLog(Log log) throws NotFoundException{
        LogEntity logEntity = modelMapper.map(log,LogEntity.class);
        logEntity = this.repository.saveAndFlush(logEntity);
        return this.findById(logEntity.getIdlog());
    }
}
