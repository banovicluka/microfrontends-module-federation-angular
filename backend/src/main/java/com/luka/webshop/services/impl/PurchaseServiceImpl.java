package com.luka.webshop.services.impl;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Purchase;
import com.luka.webshop.models.entities.PurchaseEntity;
import com.luka.webshop.repositories.PurchaseEntityRepository;
import com.luka.webshop.services.PurchaseService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PurchaseServiceImpl implements PurchaseService {

    private final ModelMapper mapper;
    private final PurchaseEntityRepository repository;

    public PurchaseServiceImpl(ModelMapper mapper, PurchaseEntityRepository repository) {
        this.mapper = mapper;
        this.repository = repository;
    }

    @Override
    public Purchase findById(Integer id) throws NotFoundException {
        return mapper.map(this.repository.findById(id).orElseThrow(NotFoundException::new),Purchase.class);
    }

    @Override
    public Purchase insert(Purchase purchase) throws NotFoundException{
        PurchaseEntity purchaseEntity = mapper.map(purchase,PurchaseEntity.class);
        System.out.println(purchaseEntity);
        purchaseEntity = repository.saveAndFlush(purchaseEntity);
        return findById(purchaseEntity.getId());
    }

    @Override
    public List<Purchase> findAll(){
        return repository.findAll().stream().map(l -> mapper.map(l,Purchase.class)).collect(Collectors.toList());
    }


}
