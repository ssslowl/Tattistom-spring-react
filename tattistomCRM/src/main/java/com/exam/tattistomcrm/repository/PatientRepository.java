package com.exam.tattistomcrm.repository;


import com.exam.tattistomcrm.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {


    public Patient getPatientById(Long id);
}
