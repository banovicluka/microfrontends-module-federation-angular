package com.luka.webshop.services;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Product;
import com.luka.webshop.models.dto.ProductDetails;
import com.luka.webshop.models.dto.PublishingProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

public interface ProductService {

    Page<Product> findAllPagination(Map<String, String> filters, Pageable pageable);

    ProductDetails findById(Integer id) throws NotFoundException;

    List<Product> findAllByUserUsername(Map<String,String> filters,String username);

    List<String> getSuggestions(String query);

    List<Product> findAll(Map<String, String> filters);
    ProductDetails insert(PublishingProduct product) throws NotFoundException;
}
