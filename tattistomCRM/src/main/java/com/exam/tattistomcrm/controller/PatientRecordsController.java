package com.exam.tattistomcrm.controller;


import com.exam.tattistomcrm.dto.PatientRecordDTO;
import com.exam.tattistomcrm.entity.Patient;
import com.exam.tattistomcrm.entity.PatientRecord;
import com.exam.tattistomcrm.repository.PatientRecordRepository;
import com.exam.tattistomcrm.service.PatientRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PatientRecordsController {

    @Autowired
    PatientRecordService recordService;

    @Autowired
    PatientRecordRepository recordRepository;

    @GetMapping("/patientRecords")
    public List<PatientRecordDTO> getRecords(){
        List<PatientRecordDTO> records = recordService.getPatientRecords();
        return records;
    }

    @PostMapping("/patientRecords")
    public PatientRecord addPatientRecord(@RequestBody PatientRecord patientRecord){
        return recordService.addPatientRecord(patientRecord);
    }

    @DeleteMapping("/patientRecords/{id}")
    public void deletePatientRecord(@PathVariable("id") Long id){
        recordService.removePatientRecord(id);
    }
}