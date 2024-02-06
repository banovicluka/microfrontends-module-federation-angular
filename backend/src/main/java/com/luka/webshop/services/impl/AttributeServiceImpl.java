package com.luka.webshop.services.impl;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Attribute;
import com.luka.webshop.models.dto.AttributeValue;
import com.luka.webshop.models.dto.Category;
import com.luka.webshop.models.entities.AttributeEntity;
import com.luka.webshop.models.entities.AttributeValueEntity;
import com.luka.webshop.models.entities.CategoryEntity;
import com.luka.webshop.repositories.AttributeEntityRepository;
import com.luka.webshop.repositories.AttributeValueEntityRepository;
import com.luka.webshop.services.AttributeService;
import org.aspectj.weaver.ast.Not;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AttributeServiceImpl implements AttributeService {


    AttributeEntityRepository repository;

    AttributeValueEntityRepository valueRepository;
    ModelMapper modelMapper;

    public AttributeServiceImpl(AttributeEntityRepository repository,AttributeValueEntityRepository valueRepository, ModelMapper modelMapper) {
        this.repository = repository;
        this.valueRepository=valueRepository;
        this.modelMapper = modelMapper;
    }


    @Override
    public List<Attribute> getAllCategoryAttributes(Integer categoryId){
        return this.repository.getAllByCategory_Id(categoryId).stream().map(a -> modelMapper.map(a,Attribute.class)).collect(Collectors.toList());
    }


    @Override
    public AttributeValue insertValue(AttributeValue attributeValue) throws NotFoundException{
        AttributeValueEntity valueEntity = modelMapper.map(attributeValue,AttributeValueEntity.class );
        valueEntity = valueRepository.saveAndFlush(valueEntity);
        return findAttributeValueById(valueEntity.getId());
    }

    @Override
    public AttributeValue findAttributeValueById(Integer id) throws NotFoundException{
        return modelMapper.map(this.valueRepository.findById(id).orElseThrow(NotFoundException::new), AttributeValue.class);
    }

    @Override
    public List<Attribute> findAllByCategoryId(Integer id){
        return this.repository.findAll().stream().filter(a -> a.getCategory().getId() == id).map( a -> modelMapper.map(a,Attribute.class)).collect(Collectors.toList());
    }

    @Override
    public Attribute findById(Integer id) throws NotFoundException{
        return modelMapper.map(repository.findById(id).orElseThrow(NotFoundException::new), Attribute.class);
    }

    @Override
    public Attribute insert(Attribute attribute) throws NotFoundException {
        AttributeEntity attributeEntity = modelMapper.map(attribute,AttributeEntity.class);
        attributeEntity= repository.saveAndFlush(attributeEntity);
        return findById(attributeEntity.getId());
    }

    @Override
    public void delete(Integer id) throws NotFoundException {

        this.repository.deleteById(id);

    }

    @Override
    public Attribute update(Attribute attribute) throws NotFoundException{
        AttributeEntity attributeEntity = modelMapper.map(attribute,AttributeEntity.class);
        attributeEntity= repository.save(attributeEntity);
        return findById(attributeEntity.getId());
    }
}
