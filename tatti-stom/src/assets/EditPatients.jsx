import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditPatient = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    gender: "",
  });

  useEffect(() => {
    getPatientById();
  }, []);


  useEffect(() =>{}, [firstName])

  const getPatientById = async () => {
    const result = await axios.get(`http://localhost:8080/getPatient/${id}`, 
    {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
    setPatient(result.data);
  };

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
    console.log (patient);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(patient);
    await axios.put(`http://localhost:8080/patients`, patient, 
    {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}}).finally(() => {
      window.location.replace("/patients");
    });
  };

  return (
    <div className="form-container">
      <h2>Редактировать пациента</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group">
            <label>Имя:</label>
            <input
              type="text"
              name="firstName"
              value={patient.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Фамилия:</label>
            <input
              type="text"
              name="lastName"
              value={patient.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          <label>Возраст:</label>
          <input
            type="number"
            name="age"
            value={parseInt(patient.age)}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <div className="input-group">
            <label>Пол:</label>
            <select
              name="gender"
              value={patient.gender}
              onChange={handleChange}
            >
              <option value="">Выберите пол</option>
              <option value="Мужчина">Мужской</option>
              <option value="Женщина">Женский</option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <label>Телефон:</label>
          <input
            type="text"
            name="phoneNumber"
            value={patient.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
};

export default EditPatient;
