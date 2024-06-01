package com.exam.tattistomcrm.service;


import com.exam.tattistomcrm.entity.Treatment;
import com.exam.tattistomcrm.repository.TreatmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreatmentService {

    @Autowired
    TreatmentRepository treatmentRepository;

    public List<Treatment> getAllTreatments() {
        return treatmentRepository.findAll();
    }


    public Treatment addTreatment(Treatment treatment) {
        return treatmentRepository.save(treatment);
    }

    public void deleteTreatment(Treatment treatment) {
        treatmentRepository.delete(treatment);
    }
}
