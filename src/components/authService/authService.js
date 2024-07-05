import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import appFirebase from '../../credenciales';

const auth = getAuth(appFirebase);

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
};

export const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
};

export const signInWithEmail = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

