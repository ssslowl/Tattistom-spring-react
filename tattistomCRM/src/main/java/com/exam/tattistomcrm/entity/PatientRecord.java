package com.exam.tattistomcrm.entity;

import jakarta.persistence.*;
import lombok.*;


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
    private Patient patientId;
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
    @Column
    private String treatment;

}

