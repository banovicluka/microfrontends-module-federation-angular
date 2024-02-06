package com.luka.webshop.services;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Purchase;

import java.util.List;

public interface PurchaseService {

  Purchase insert(Purchase purchase) throws NotFoundException;

  Purchase findById(Integer id) throws NotFoundException;

    List<Purchase> findAll();
}
