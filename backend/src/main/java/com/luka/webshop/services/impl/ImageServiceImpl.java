package com.luka.webshop.services.impl;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Image;
import com.luka.webshop.models.entities.ImageEntity;
import com.luka.webshop.repositories.ImageRepository;
import com.luka.webshop.services.ImageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.Banner;
import org.springframework.stereotype.Service;

@Service
public class ImageServiceImpl implements ImageService {


    ImageRepository repository;


    ModelMapper modelMapper;

    public ImageServiceImpl(ImageRepository repository, ModelMapper modelMapper){
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public Image findById(Integer id) throws NotFoundException{
        return modelMapper.map(this.repository.findById(id).orElseThrow(NotFoundException::new),Image.class);
    }

    @Override
    public Image insertImage(Image image) throws NotFoundException {
        ImageEntity imageEntity = modelMapper.map(image,ImageEntity.class);
        imageEntity = this.repository.saveAndFlush(imageEntity);
        return findById(imageEntity.getId());
    }
}
