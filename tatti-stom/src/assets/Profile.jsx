import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(user);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  return (
    <div className="profile-container">
        <h2>Профиль пользователя</h2>
      
      {user && (
        <div className="profile-details">
          <p><strong>Имя:</strong> {user.name} {user.lastname}</p>
          <p><strong>Возраст:</strong> {user.age}</p>
          <p><strong>Специализация:</strong> {user.specialization}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;

