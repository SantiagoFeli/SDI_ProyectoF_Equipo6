import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import app_f from "../../firebase";

const auth = getAuth(app_f);

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

