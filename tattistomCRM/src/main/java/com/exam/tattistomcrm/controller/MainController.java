package com.exam.tattistomcrm.controller;


import com.exam.tattistomcrm.entity.Patient;
import com.exam.tattistomcrm.entity.PatientRecord;
import com.exam.tattistomcrm.service.PatientRecordService;
import com.exam.tattistomcrm.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class MainController {

    @Autowired
    PatientService service = new PatientService();
    @GetMapping("/")
    public String greeting(Model model) {
        return "Home";
    }


    @GetMapping("/patients")
    public List<Patient> patientTable(){

        List<Patient> patients = service.getPatientList();
        return patients;
    }

//    public String patientTable(Model model){
//        List<Patient> patients = service.getPatientList();
//
//        model.addAttribute("patients", patients);
//        return "patients";
//    }




    @PostMapping("/patients")
    public Patient newPatient(@RequestBody Patient newPatient){
        return service.addPatient(newPatient);
    }





    @Autowired
    PatientRecordService recordService;

    @GetMapping("/patientRecords")
    public List<PatientRecord> getRecords(){
        return recordService.getPatientRecords();
    }

    @PostMapping("/patientRecords")
    public PatientRecord addPatientRecord(@RequestBody PatientRecord patientRecord){
        return recordService.addPatientRecord(patientRecord);
    }
}