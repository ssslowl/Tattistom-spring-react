package com.exam.tattistomcrm.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "PATIENT_RECORDS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PatientRecord {





    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(fetch = FetchType.EAGER)
    private Patient patient;
    @ManyToOne(fetch = FetchType.EAGER)
    private User doctor;
    @Column
    private String VisitStart;
    @Column
    private String VisitEnd;
    @Column
    private Boolean isVisited;
    @Column
    private String description;
    @ManyToMany
    private List<Treatment> treatments;


}

