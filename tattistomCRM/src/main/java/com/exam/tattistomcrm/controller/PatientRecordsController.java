package com.exam.tattistomcrm.controller;


import com.exam.tattistomcrm.entity.PatientRecord;
import com.exam.tattistomcrm.service.PatientRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PatientRecordsController {

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