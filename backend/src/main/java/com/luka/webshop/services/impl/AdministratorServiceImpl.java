package com.luka.webshop.services.impl;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Administrator;
import com.luka.webshop.models.dto.LoginRequest;
import com.luka.webshop.models.entities.AdministratorEntity;
import com.luka.webshop.repositories.AdministratorEntityRepository;
import com.luka.webshop.services.AdministratorService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdministratorServiceImpl implements AdministratorService {

    private final ModelMapper modelMapper;
    private final AdministratorEntityRepository repository;

    public AdministratorServiceImpl(AdministratorEntityRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<Administrator> findAll() {
        return repository.findAll().stream().map(l->modelMapper.map(l,Administrator.class)).collect(Collectors.toList());
    }

    @Override
    public Administrator findById(Integer id) throws NotFoundException {
        return modelMapper.map(repository.findById(id).orElseThrow(NotFoundException::new),Administrator.class);
    }

    @Override
    public Administrator create(Administrator administrator) {
        return modelMapper.map(repository.save(modelMapper.map(administrator,AdministratorEntity.class)),Administrator.class);
    }

    @Override
    public void delete(Administrator administrator){
        repository.delete(modelMapper.map(administrator, AdministratorEntity.class));
    }

    @Override
    public Administrator login(LoginRequest loginRequest) throws NotFoundException {
//        List<AdministratorEntity> list = repository.findAll().stream().filter((l) -> l.getUsername() == username && l.getPassword() == password).toList();
//        if(list.isEmpty()) throw new NotFoundException();
//        else return modelMapper.map(list.get(0),Administrator.class);
          System.out.println("sddsdjsdkjsldsldskdslkd");
//        System.out.println(loginRequest.username +" " + loginRequest.password);
        AdministratorEntity administratorEntity = modelMapper.map(loginRequest,AdministratorEntity.class);
        administratorEntity.setId(null);
        //System.out.println(administratorEntity.getUsername() + "  sdsds " + administratorEntity.getPassword());
        List<AdministratorEntity> list = repository.findAll().stream().filter((l) -> l.getUsername().equals(administratorEntity.getUsername())
                && l.getPassword().equals(administratorEntity.getPassword())).toList();
        if(list.isEmpty()) throw  new NotFoundException();
        else  return modelMapper.map(list.get(0), Administrator.class);
    }
}
