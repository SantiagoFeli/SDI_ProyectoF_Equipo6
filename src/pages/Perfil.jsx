import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import app_firebase from "../credentials";
import './UserProfile.css';


const Perfil = () => {
    const [user, setUser] = useState({
        nombre: 'Angel',
        apellido: 'García',
        email: 'angel@gmail.com',
        telefono: '04144578953',
      });
    
      return (
        <div style={styles.container}>
          <div style={styles.profilePictureContainer}>
            <img
              src="https://via.placeholder.com/150"
              alt="profile"
              style={styles.profilePicture}
            />
          </div>
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Nombre:</label>
            <input
              type="text"
              value={user.nombre}
              style={styles.input}
              readOnly
            />
          </div>
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Apellido:</label>
            <input
              type="text"
              value={user.apellido}
              style={styles.input}
              readOnly
            />
          </div>
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={user.email}
              style={styles.input}
              readOnly
            />
          </div>
          <div style={styles.fieldContainer}>
            <label style={styles.label}>Teléfono:</label>
            <input
              type="text"
              value={user.telefono}
              style={styles.input}
              readOnly
            />
          </div>
          <div style={styles.buttonContainer}>
            <button style={styles.button}>Editar</button>
            <button style={styles.button}>Cambiar Contraseña</button>
          </div>
        </div>
      );
    };
export default Perfil;