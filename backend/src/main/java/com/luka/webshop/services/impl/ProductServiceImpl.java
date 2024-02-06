package com.luka.webshop.services.impl;

import com.luka.webshop.exceptions.NotFoundException;
import com.luka.webshop.models.dto.Product;
import com.luka.webshop.models.dto.ProductDetails;
import com.luka.webshop.models.dto.PublishingProduct;
import com.luka.webshop.models.dto.Purchase;
import com.luka.webshop.models.entities.ProductEntity;
import com.luka.webshop.models.entities.PurchaseEntity;
import com.luka.webshop.repositories.ProductEntityRepository;
import com.luka.webshop.repositories.PurchaseEntityRepository;
import com.luka.webshop.services.ProductService;
import org.aspectj.weaver.ast.Not;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class ProductServiceImpl implements ProductService {


    private final ModelMapper modelMapper;
    private final ProductEntityRepository repository;

    private final PurchaseEntityRepository purchaseRepository;

    ProductServiceImpl(ModelMapper modelMapper, ProductEntityRepository repository, PurchaseEntityRepository purchaseRepository){
        this.modelMapper = modelMapper;
        this.repository = repository;
        this.purchaseRepository = purchaseRepository;
    }

    public List<Product> findAll(Map<String, String> filters){
        return this.doFilters(repository.findAll().stream(),filters).map(l->modelMapper.map(l,Product.class))
                .collect(Collectors.toList());
    }

    public Page<Product> findAllPagination(Map<String, String> filters, Pageable pageable){
        List<Product> list = this.doFilters(repository.findAll().stream().filter(a-> !isProductPurchased(a)),filters).map(l->modelMapper.map(l,Product.class))
                .collect(Collectors.toList());

        int pageSize = pageable.getPageSize();
        int pageNumber = pageable.getPageNumber();
        int startIndex = pageSize * pageNumber;
        int endIndex = Math.min(startIndex + pageSize, list.size());

        List<Product> productsForPage = list.subList(startIndex, endIndex);

        Page<Product> page = new PageImpl<>(productsForPage, pageable, list.size());
        return page;
    }

    public ProductDetails findById(Integer id) throws NotFoundException {
        return  modelMapper.map(repository.findById(id).orElseThrow(NotFoundException::new), ProductDetails.class);
    }

    @Override
    public List<Product> findAllByUserUsername(Map<String,String> filters,String username){

        return this.doFilters(repository.getAllByUser_Username(username).stream().filter(a-> !isProductPurchased(a)),filters).map(l-> modelMapper.map(l,Product.class))
                .collect(Collectors.toList());
    }

    @Override
    public ProductDetails insert(PublishingProduct product) throws NotFoundException {
        ProductEntity productEntity = modelMapper.map(product,ProductEntity.class);
        productEntity = repository.saveAndFlush(productEntity);
        return findById(productEntity.getId());
    }

    @Override
    public List<String> getSuggestions(String query) {
        Map<String, String> filters = new HashMap<>();
        return this.findAll(filters).stream().map(Product::getTitle).filter(s -> s.toLowerCase().startsWith(query.toLowerCase())).collect(Collectors.toList());
    }

    public Stream<ProductEntity> doFilters(Stream<ProductEntity> stream, Map<String,String> filters){
        //stream = stream.filter(a -> !isProductPurchased(a));
        if(filters.containsKey("search")){
            stream = stream.filter(p -> p.getTitle().toLowerCase().startsWith(filters.get("search").toLowerCase()));
        }
        if(filters.containsKey("category")) {
            stream = stream.filter(p -> p.getCategory().getName().equals(filters.get("category")));
        }
        if(filters.containsKey("minPrice")){
            try {
                stream = stream.filter(p -> p.getPrice() > Integer.parseInt(filters.get("minPrice")));
            }catch (Exception ex){}
        }
        if(filters.containsKey("maxPrice")){
            try {
                stream = stream.filter(p -> p.getPrice() < Integer.parseInt(filters.get("maxPrice")));
            }catch (Exception ex){}
        }
        if(filters.containsKey("condition")){
            stream = stream.filter(p -> p.getUnused().equals(Boolean.parseBoolean(filters.get("condition"))));
        }
        if(filters.containsKey("location")){
            stream = stream.filter(p -> p.getLocation().equals(filters.get("location")));
        }
        return stream;
    }

    Boolean isProductPurchased(ProductEntity product){
        try{
           PurchaseEntity productEntity =  purchaseRepository.getPurchaseEntityByProduct_Id(product.getId());
           if(productEntity !=null){
               return true;
           }else{
               return false;
           }
        }catch(Exception ex){
            return false;
        }
    }
}
