package com.luka.webshop.services.impl;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Category;
import com.luka.webshop.models.dto.User;
import com.luka.webshop.models.entities.CategoryEntity;
import com.luka.webshop.models.entities.UserEntity;
import com.luka.webshop.repositories.UserEntityRepository;
import com.luka.webshop.services.EmailService;
import com.luka.webshop.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private final ModelMapper modelMapper;
    private final UserEntityRepository repository;

    private final EmailService emailService;

    public UserServiceImpl(ModelMapper modelMapper, UserEntityRepository repository, EmailService emailService) {
        this.modelMapper = modelMapper;
        this.repository = repository;

        this.emailService = emailService;
    }

    public UserEntity findByUsername(String username){
        return repository.findByUsername(username);
    }

    @Override
    public User findUserByUsername(String username) throws NotFoundException {
        return modelMapper.map( repository.findByUsername(username),User.class);
    }

    @Override
    public User findById(Integer id) throws NotFoundException{
        return modelMapper.map(repository.findById(id).orElseThrow(NotFoundException::new), User.class);
    }

    @Override
    public Integer findIdByUsername(String username) throws NotFoundException{
        return repository.findIdByUsername(username);
    }

    public int generatePin(){
        Random rand = new Random();
        return 1000 + rand.nextInt(9000);
    }

    public void sendEmail(Integer pin){

    }
    @Override
    public User registerUser(User user) throws NotFoundException {
        UserEntity userEntity = modelMapper.map(user,UserEntity.class);

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        userEntity.setPassword(encoder.encode(userEntity.getPassword()));

        userEntity.setActive(false);
        userEntity.setAvatar("/");
        userEntity.setPin(this.generatePin());
        this.emailService.sendMail(userEntity.getEmail(),"VERIFY YOUR ACCOUNT - WEB SHOP", userEntity.getPin().toString());

        userEntity = this.repository.saveAndFlush(userEntity);
        return this.findById(userEntity.getId());
    }

    @Override
    public User updateAccStatus(User user) throws NotFoundException {
        UserEntity userEntity = modelMapper.map(user,UserEntity.class);
        userEntity.setActive(true);
        userEntity = repository.saveAndFlush(userEntity);
        return findById(userEntity.getId());
    }

    @Override
    public List<User> findAll(){
        return this.repository.findAll().stream().map(u -> modelMapper.map(u,User.class)).collect(Collectors.toList());
    }

    @Override
    public User insert(User user) throws NotFoundException {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(user.getPassword()));
        user.setAvatar("/");
        UserEntity userEntity = modelMapper.map(user,UserEntity.class);
        userEntity= repository.saveAndFlush(userEntity);
        return findById(userEntity.getId());
    }

    @Override
    public void delete(Integer id) throws NotFoundException{

        this.repository.deleteById(id);

    }

    @Override
    public User update(User user) throws NotFoundException{
        UserEntity userEntity = modelMapper.map(user,UserEntity.class);
        userEntity= repository.save(userEntity);
        return findById(userEntity.getId());
    }
}
