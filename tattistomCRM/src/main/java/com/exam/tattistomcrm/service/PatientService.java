package com.exam.tattistomcrm.service;


import com.exam.tattistomcrm.entity.Patient;
import com.exam.tattistomcrm.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public Patient addPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    public void removePatient(Patient patient) {
        patientRepository.delete(patient);
    }

    public Patient updatePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    public List<Patient> getPatientList() {
        return patientRepository.findAll();

    }

    public Patient getPatientById(Long id) {
        return patientRepository.getPatientById(id);
    }


}
