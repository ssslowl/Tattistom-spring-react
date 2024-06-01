import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UserList = () => {
  const [patients, setPatients] = useState([]);
  const [link, setlink] = useState(window.location.pathname);

  useEffect(() => {
    getPatients();
    console.log(patients);
  }, []);

  const getPatients = async () => {
    const result = await axios.get("http://localhost:8080/patients", {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
    setPatients(result.data);
  };

  const deletePatient = async (id) => {
    await axios.delete(`http://localhost:8080/patients/${id}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
    setPatients(patients.filter(patient => patient.id !== id));
  };

  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => setModalOpened(true);

  const closeModal = () => setModalOpened(false);

  return (
    <div className="container">
      <h1>Список пользователей</h1>
      <Link
        className="add-patient-button"
        to={"/AddPatients"}
        style={{ width: "204px" }}
      >
        Добавить пациента
      </Link>
      

      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>ФИО</th>
              <th>Возраст</th>
              <th>Номер телефона</th>
              <th>Пол</th>
              <th>редактировать</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((val, key) => {
              return (
                <tr>
                  <td>{patients.indexOf(val) + 1}</td>
                  <td>{val.id}</td>
                  <td>{val.firstName + " " + val.lastName}</td>
                  <td>{val.age}</td>
                  <td>{val.phoneNumber}</td>
                  <td>{val.gender}</td>
                  <td style={{display: "flex"}}>
                    <Link to={`/EditPatients/${val.id}`}><EditIcon/></Link>
                    <Link onClick={() => deletePatient(val.id)}><DeleteIcon/></Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
