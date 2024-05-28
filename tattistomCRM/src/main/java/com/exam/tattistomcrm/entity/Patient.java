package com.exam.tattistomcrm.entity;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "PATIENTS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String iin;
    @Column
    private int age;
    @Column
    private String phoneNumber;
    @Column
    private String gender;

}
