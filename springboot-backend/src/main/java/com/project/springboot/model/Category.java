package com.project.springboot.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CollectionId;

@Data
@Entity
@Table(name = "category")
public class Category {

    @Id
    private long id;
    private String name;

}
