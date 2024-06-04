package com.exam.tattistomcrm.dto;

import com.exam.tattistomcrm.entity.Patient;
import com.exam.tattistomcrm.entity.Treatment;
import com.exam.tattistomcrm.entity.User;
import lombok.*;

import java.util.List;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class PatientRecordDTO {

    private long event_id;
    private Patient patient;
    private User doctor;
    private String Start;
    private String End;
    private Boolean isVisited;
    private String description;
    private List<Treatment> treatments;


}

