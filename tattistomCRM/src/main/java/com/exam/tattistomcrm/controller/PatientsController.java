package com.exam.tattistomcrm.controller;


import com.exam.tattistomcrm.EntityFactory;
import com.exam.tattistomcrm.entity.Patient;
import com.exam.tattistomcrm.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PatientsController {

    @Autowired
    PatientService service = new PatientService();



    @GetMapping("/getPatient/{id}")
    public Patient getPatient(@PathVariable("id") Long id){
        return service.getPatientById(id);
    }


    @GetMapping("/patients")
    public List<Patient> patientTable(){

        List<Patient> patients = service.getPatientList();
        return patients;
    }


    @PostMapping("/patients")
    public Patient entity(@RequestBody Patient entity){
        EntityFactory.createPatient(entity.getFirstName(), entity.getLastName(), entity.getAge(), entity.getPhoneNumber());
        return service.addPatient(entity);
    }

    @PutMapping("/patients")
    public Patient editPatient(@RequestBody Patient patient){
        return service.updatePatient(patient);
    }


}