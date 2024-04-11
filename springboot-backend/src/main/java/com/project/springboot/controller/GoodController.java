package com.project.springboot.controller;

import com.project.springboot.model.Category;
import com.project.springboot.model.Good;
import com.project.springboot.repository.GoodRepository;
import jakarta.persistence.NamedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:8081/")
public class GoodController {

    @Autowired
    private GoodRepository goodRepository;

    @GetMapping("/goods")
    public List<Good> fetchGoods() {
        return goodRepository.findAllCategories();
    }

}
