package com.exam.tattistomcrm.controller;


import com.exam.tattistomcrm.entity.Treatment;
import com.exam.tattistomcrm.service.TreatmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/treatments")
@CrossOrigin("http://localhost:5173")
@RequiredArgsConstructor
public class TreatmentController {

    @Autowired
    private final TreatmentService treatmentService;

    @PostMapping
    public Treatment addTreatment(@RequestBody Treatment treatment) {
        return treatmentService.addTreatment(treatment);
    }

}
