package com.exam.tattistomcrm.service;




import com.exam.tattistomcrm.dto.PatientRecordDTO;
import com.exam.tattistomcrm.entity.PatientRecord;

import com.exam.tattistomcrm.repository.PatientRecordRepository;
import com.exam.tattistomcrm.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PatientRecordService {
    @Autowired
    private PatientRecordRepository patientRecordRepository;
    @Autowired
    private PatientRepository patientRepository;


    public PatientRecord addPatientRecord (PatientRecord record){
        return patientRecordRepository.save(record);
    }

    public List<PatientRecordDTO> getPatientRecords(){

        List<PatientRecord> records = patientRecordRepository.findAll();
        List<PatientRecordDTO> dtos = new ArrayList<>();
        records.forEach(record -> dtos.add(toDto(record)));

        return dtos;
    }
    public void removePatientRecord(Long id){
        patientRepository.deleteById(id);
    }

    public PatientRecordDTO toDto(PatientRecord record){
        PatientRecordDTO dto = PatientRecordDTO.builder()
                                .event_id(record.getId())
                                .patient(record.getPatient())
                .doctor(record.getDoctor())
                .Start(record.getVisitStart())
                .End(record.getVisitEnd())
                .description(record.getDescription())
                .isVisited(record.getIsVisited())
                .build();
        return dto;
    }


}
