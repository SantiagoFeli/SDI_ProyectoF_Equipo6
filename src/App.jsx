import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import app_f from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
//import Menu from './pages/Menu';
import Conocenos from './pages/Conocenos';
//import Pedido from './pages/Pedido';
import Contacto from './pages/Contacto';
//import IniciarSesion from './pages/IniciarSesion';
//import Registrarse from './pages/Registrarse';
//import Home from './pages/Home';

const auth = getAuth(app_f);

function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase){
      setUsuario(usuarioFirebase);
    }
    else{
      setUsuario(null);
    }
  })

  return (

    <Router>
      <Navbar />
      <Routes>
       
        <Route path="/conocenos" element={<Conocenos />} />
     
        <Route path="/contacto" element={<Contacto />} />
   
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;