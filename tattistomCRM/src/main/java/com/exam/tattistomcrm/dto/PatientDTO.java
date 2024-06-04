package com.exam.tattistomcrm.dto;

import lombok.*;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PatientDTO {

    private long id;
    private String firstName;
    private String lastName;
    private String iin;
    private int age;
    private String phoneNumber;
    private String gender;

}
