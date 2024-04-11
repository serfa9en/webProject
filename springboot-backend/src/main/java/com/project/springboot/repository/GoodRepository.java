package com.project.springboot.repository;

import com.project.springboot.model.Good;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface GoodRepository extends JpaRepository<Good, Long> {
}
