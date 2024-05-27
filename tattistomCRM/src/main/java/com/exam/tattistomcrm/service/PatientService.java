package com.exam.tattistomcrm.service;


import com.exam.tattistomcrm.entity.Patient;
import com.exam.tattistomcrm.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public Patient addPatient(Patient patient){
        return patientRepository.save(patient);
    }

    public List<Patient> getPatientList(){
        if(patientRepository.findAll() != null) {
            return patientRepository.findAll();
        }else{
            return new ArrayList<>();
        }
    }


}
