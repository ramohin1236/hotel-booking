/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.init";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { removeToken } from "../api/auth";



export const AuthContext =createContext(null)
const auth =getAuth(app)
const googleProvider = new GoogleAuthProvider()



const AuthProvider = ({children}) => {
const [user, setUser]= useState(null)
const [loading, setLoading]=useState(true)
   
const createUser =(email,password)=>{
         setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password)
    }


    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    
    const signInGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const resetPassword =(email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    const logOut =async()=>{
        setLoading(true)
        await removeToken
        return signOut(auth)
    }


// update user information
    const updateUserProfile =(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log("Current User--->", currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])





    const authInfo ={
        loading,
        user,
        createUser,
        signIn,
        signInGoogle,
        logOut,
        resetPassword,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;