import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors();
    console.log(doctors);
  }, []);

  const getDoctors = async () => {
    const result = await axios.get("http://localhost:8080/doctors", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
    setDoctors(result.data);
  };

  const deleteDoctor = async (id) => {
    await axios.delete(`http://localhost:8080/doctors/${id}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
    setDoctors(doctors.filter(doctor => doctor.id !== id));
  };

  return (
    <div className="container">
      <h1>Список докторов</h1>
      <Link
        className="add-patient-button"
        to={"/AddDoctors"}
        style={{ width: "204px" }}
      >
        Добавить доктора
      </Link>

      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>ФИО</th>
              <th>Специализация</th>
              <th>Номер телефона</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{doctor.id}</td>
                <td>{doctor.fullName}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.phoneNumber}</td>
                <td>{doctor.email}</td>
                <td>
                  <button onClick={() => deleteDoctor(doctor.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorList;
