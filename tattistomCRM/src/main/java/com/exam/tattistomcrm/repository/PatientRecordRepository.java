package com.exam.tattistomcrm.repository;

import com.exam.tattistomcrm.entity.PatientRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PatientRecordRepository extends JpaRepository<PatientRecord, Long> {
}
