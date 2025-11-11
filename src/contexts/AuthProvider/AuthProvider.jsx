import React, { useEffect, useState } from "react";
import { AuthContexts } from "../AuthContexts/AuthContexts";
import { auth } from "./../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
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

  const datas = { createUser, signInUser, user, loading, logOut };
  return <AuthContexts value={datas}>{children}</AuthContexts>;
};

export default AuthProvider;
