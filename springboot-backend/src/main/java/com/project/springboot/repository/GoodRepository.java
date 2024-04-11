package com.project.springboot.repository;

import com.project.springboot.model.Good;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface GoodRepository extends JpaRepository<Good, Long> {

    @Query("select u, c from Good u, Category c where u.category = c.id")
    List<Good> findAllCategories();
}
