package com.exam.tattistomcrm;


import com.exam.tattistomcrm.entity.Patient;
import com.exam.tattistomcrm.entity.User;

public class EntityFactory {

    public static User createUser(String firstName, String lastName, String username, String password, String phoneNumber, String email) {
        User doctor = new User();
        doctor.setName(firstName);
        doctor.setLastname(lastName);
        doctor.setUsername(username);
        doctor.setPassword(password);
        doctor.setEmail(email);
        return doctor;
    }

    public static Patient createPatient(String firstName, String lastName, int age, String phoneNumber) {
        Patient patient = new Patient();
        patient.setFirstName(firstName);
        patient.setLastName(lastName);
        patient.setAge(age);
        patient.setPhoneNumber(phoneNumber);
        return patient;
    }
}