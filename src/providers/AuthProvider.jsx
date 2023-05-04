import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const [loading, setLoading] = useState(true);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const signInWithPopUp = signInWithPopup(auth, provider);
        return signInWithPopUp;
    }

    const gitHubSignIn = () => {
        const provider = new GithubAuthProvider();
        const signInWithPopUp = signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser);
            setLoading(false)
        })
        return ()=> {
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleSignIn,
        gitHubSignIn
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;