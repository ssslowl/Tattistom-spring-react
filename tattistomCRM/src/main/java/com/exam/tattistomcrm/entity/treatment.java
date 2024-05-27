package com.exam.tattistomcrm.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Table
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class treatment {

    @Column
    String name;
    
    @Column
    Double cost;
}
