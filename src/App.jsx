import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import app_f from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './App.css'
import Footer from './components/Footer/Footer';
import ContactUs from './pages/ContactUs';

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
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home correoUsuario={usuario ? usuario.email : null}/>} />
          {/* <Route exact path="/menu" element={<Menu />} /> */}
          <Route exact path="/login" element={usuario ? <Navigate to="/" replace />: <Login />} />
          <Route exact path="/register" element={usuario ? <Navigate to="/" replace />: <Register />} />
          <Route exact path="/LoginAdmin" element={usuario ? <Navigate to="/" replace />: <LoginAdmin/>} />
          <Route exact path="/contactanos" element={<contactanos />} />
          <Route path="/contact-us" element={<Contactanos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;