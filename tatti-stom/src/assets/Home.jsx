
import React, { useState, useEffect } from 'react';
// import Table from './Table';
import axios from 'axios';
import styles from './App.module.css'
// import './Dashboard.css'; // Подключение файла стилей/

function Dashboard() {
  const [totalPatients, setTotalPatients] = useState(0);
  const [todayPatients, setTodayPatients] = useState(0);

  useEffect(() => {
    // Функция для загрузки данных
    const fetchData = async () => {
      try {
        const totalResponse = await axios.get('http://localhost:8080/patients/total');
        const todayResponse = await axios.get('http://localhost:8080/patients/today');
        setTotalPatients(totalResponse.data.total);
        setTodayPatients(todayResponse.data.today);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.Dashboard}>
      <h2>Добро пожаловать, доктор!</h2>
      <div className={styles.Dashboard_stats}>
        <div className={styles.Dashboard_stat}>
          <h3>Общее число пациентов</h3>
          <p>{totalPatients}</p>
        </div>
        <div className={styles.Dashboard_stat}>
          <h3>Записались на сегодня</h3>
          <p>{todayPatients}</p>
        </div>
      </div>
      <div className={styles.Dashboard_sections}>

      </div>
    </div>
  );
}

export default Dashboard;


