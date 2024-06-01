package com.exam.tattistomcrm.entity;

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
    @ManyToOne(fetch = FetchType.LAZY)
    private Patient patient;
    @ManyToOne(fetch = FetchType.LAZY)
    private User doctor;
    @Column
    private String date;
    @Column
    private String time;
    @Column
    private String description;
    @Enumerated(EnumType.STRING)
    @Column(name = "cabinet", nullable = false)
    private Cabinet cabinet;
    @ManyToMany
    private List<Treatment> treatments;

}

