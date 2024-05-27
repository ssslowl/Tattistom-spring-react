import React, { useState } from "react";
import "./AddPatients.css"; // Подключаем файл со стилями
import axios from "axios";

const AddPatients = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [iin, setIin] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Проверка наличия всех данных
    if (!name || !lastname || !age || !phoneNumber) {
      alert("Please fill in all fields");
      return;
    }
    // Создание нового объекта пациента
    const newPatient = {
      firstName: name,
      lastName: lastname,
      age: age,
      phoneNumber: phoneNumber,
      gender: gender
    };

    await axios.post("http://localhost:8080/patients", newPatient, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json'}});
    // Сброс полей после успешной отправки
    setName("");
    setLastname("");
    setAge("");
    setPhoneNumber("");
    setGender("");
    // Дополнительно можно вызвать onAdd для обновления списка пациентов в родительском компоненте
    if (onAdd) {
      onAdd(newPatient);
    }
  };

  return (
    <div className="form-container">
      <h2>Добавить нового пациента</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group">
            <label>Имя:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Фамилия:</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Возраст:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="row">
          <div className="input-group">
            <label>Пол:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <button type="submit">Добавить пациента</button>
      </form>
    </div>
  );
};

export default AddPatients;
