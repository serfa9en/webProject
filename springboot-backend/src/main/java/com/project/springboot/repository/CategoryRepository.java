package com.project.springboot.repository;

import com.project.springboot.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface CategoryRepository extends JpaRepository<Category, Long> {

    //@Query("select p from Good p where p.category = ?1")
    Category findById(int category);

}
