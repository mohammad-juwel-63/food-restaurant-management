import React, { useEffect, useState } from "react";
import { AuthContexts } from "../AuthContexts/AuthContexts";
import { auth } from "./../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update data

  const updateDisplayData = (updatedata) => {
    return updateProfile(auth.currentUser, updatedata);
  };

  // google login

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // signInuser

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // onauth

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // signout

  const logOut = () => {
    return signOut(auth)
      .then(() => {
        alert("signout succesfully");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const datas = {
    createUser,
    setUser,
    signInUser,
    updateDisplayData,
    user,
    loading,
    logOut,
    googleLogIn,
  };
  return <AuthContexts value={datas}>{children}</AuthContexts>;
};

export default AuthProvider;
