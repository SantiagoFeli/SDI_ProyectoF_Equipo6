import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { signInWithGoogle, signInWithFacebook, signInWithEmail } from '../../services/authService';
import { UserContext } from '../../Controllers/UserContext';
import glogo from '../../assets/google-logo.png';  // Add the actual path for google logo
import flogo from '../../assets/facebook-logo.png'; // Add the actual path for facebook logo
import AuthButton from '../../Components/AuthButton';
import LoadingSpinner from '../../Components/LoadingSpinner';

const Login = () => {
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLoginButton = async () => {
        setEmailError('');
        setPasswordError('');
        if (!validateEmail(email)) {
            setEmailError('Por favor, ingrese un correo válido.');
            return;
        }
        if (password.length < 6) {
            setPasswordError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        setLoading(true);
        try {
            await signInWithEmail(email, password);
            setUser({ email });
            navigate('/Home'); // Redirigir al usuario a la página de inicio después de iniciar sesión
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            await signInWithGoogle();
            setUser({ email: 'googleUser' }); // Reemplazar con los datos reales del usuario
            navigate('/Home'); // Redirigir al usuario a la página de inicio después de iniciar sesión
        } catch (error) {
            setErrorMessage('No se pudo iniciar sesión con Google');
        } finally {
            setLoading(false);
        }
    };

    const handleFacebookSignIn = async () => {
        setLoading(true);
        try {
            await signInWithFacebook();
            setUser({ email: 'facebookUser' }); // Reemplazar con los datos reales del usuario
            navigate('/Home'); // Redirigir al usuario a la página de inicio después de iniciar sesión
        } catch (error) {
            setErrorMessage('No se pudo iniciar sesión con Facebook');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <div>INICIO DE SESIÓN</div>
            </div>
            <br />
            {errorMessage && <p className="errorLabel">{errorMessage}</p>}
            <div className="inputContainer">
                <input
                    value={email}
                    placeholder="Email *"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className="inputBox"
                />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className="inputContainer">
                <input
                    type="password"
                    value={password}
                    placeholder="Contraseña *"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className="inputBox"
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className="forgotPassword">
                <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
            </div>
            <br />
            <div className="inputContainer">
                <button className="inputButton" onClick={handleLoginButton} disabled={loading}>
                    {loading ? <LoadingSpinner /> : 'Iniciar sesión'}
                </button>
            </div>
            <div className="registerContainer">
                <span>¿No tienes una cuenta? <a href="/register">Regístrate</a></span>
            </div>
            <div className="inputContainer">
                <AuthButton onClick={handleGoogleSignIn} logo={glogo} alt="Google" />
                <AuthButton onClick={handleFacebookSignIn} logo={flogo} alt="Facebook" />
            </div>
        </div>
    );
};

export default Login;
