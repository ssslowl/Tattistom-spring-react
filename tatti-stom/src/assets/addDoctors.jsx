import React, { useState } from "react";
import axios from "axios";
import "./addDoctors.css";

const AddDoctors = () => {
  const [fullName, setFullName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !specialization || !phoneNumber || !email) {
      alert("Please fill in all fields");
      return;
    }

    const newDoctor = {
      fullName,
      specialization,
      phoneNumber,
      email,
    };

    try {
      await axios.post("http://localhost:8080/doctors", newDoctor, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      setFullName("");
      setSpecialization("");
      setPhoneNumber("");
      setEmail("");

      alert("Doctor added successfully!");
    } catch (error) {
      console.error("Error adding doctor: ", error);
      alert("Error adding doctor. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Добавить нового доктора</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>ФИО:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Специализация:</label>
          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Номер телефона:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Добавить доктора</button>
      </form>
    </div>
  );
};

export default AddDoctors;
