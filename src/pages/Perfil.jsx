import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app_firebase from "../credentials";
import './UserProfile.css';


const Perfil = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app_firebase);
    const db = getFirestore(app_firebase);

    const fetchUserData = async (firebaseUser) => {
      try {
        const userDocRef = doc(db, "users", firebaseUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUser({ uid: firebaseUser.uid, ...userDoc.data() });
        } else {
          console.log("No se encontraron datos del usuario.");
        }
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        fetchUserData(firebaseUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); 
  }, []);

  if (!user) {
    return <div>Cargando...</div>;
  }
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