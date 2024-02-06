package com.luka.webshop.security;

import com.luka.webshop.models.entities.UserEntity;
import com.luka.webshop.repositories.UserEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private UserEntityRepository repository;

    @Autowired
    public CustomUserDetailsService(UserEntityRepository repository){
        this.repository=repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = repository.findByUsername(username);
        if(user== null){
            throw new UsernameNotFoundException("User not found.");
        }
        List<String> roles = new ArrayList<>();
        //roles.add(user.getIsAdmin() == 0? "USER": "ADMIN");
        roles.add(0==0? "USER": "ADMIN");
        return new User(user.getUsername(), user.getPassword(), mapRoleToAuhtorities(roles));
    }

    private Collection<GrantedAuthority> mapRoleToAuhtorities(List<String> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role)).collect(Collectors.toList());
    }
}
