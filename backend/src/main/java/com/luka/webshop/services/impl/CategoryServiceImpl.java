package com.luka.webshop.services.impl;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Administrator;
import com.luka.webshop.models.dto.Category;
import com.luka.webshop.models.dto.ProductDetails;
import com.luka.webshop.models.dto.PublishingProduct;
import com.luka.webshop.models.entities.AdministratorEntity;
import com.luka.webshop.models.entities.CategoryEntity;
import com.luka.webshop.models.entities.ProductEntity;
import com.luka.webshop.repositories.CategoryEntityRepository;
import com.luka.webshop.services.CategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {

    ModelMapper modelMapper;

    CategoryEntityRepository repository;

    public CategoryServiceImpl(ModelMapper modelMapper, CategoryEntityRepository repository) {
        this.modelMapper = modelMapper;
        this.repository = repository;
    }

    @Override
    public List<Category> findAll(){
        return repository.findAll().stream().map(l-> modelMapper.map(l,Category.class)).collect(Collectors.toList());
    }

    @Override
    public Category findById(Integer id) throws NotFoundException{
        return modelMapper.map(repository.findById(id).orElseThrow(NotFoundException::new), Category.class);
    }

        @Override
        public Category insert(Category category) throws NotFoundException {
            CategoryEntity categoryEntity = modelMapper.map(category,CategoryEntity.class);
            categoryEntity= repository.saveAndFlush(categoryEntity);
            return findById(categoryEntity.getId());
        }

    @Override
    public void delete(Integer id) throws NotFoundException{

        this.repository.deleteById(id);
    }

    @Override
    public Category update(Category category) throws NotFoundException{
        CategoryEntity categoryEntity = modelMapper.map(category,CategoryEntity.class);
        categoryEntity= repository.save(categoryEntity);
        return findById(categoryEntity.getId());
    }


}
