import React from "react";
import { AuthContexts } from "../AuthContexts/AuthContexts";

const AuthProvider = ({ children }) => {
  const datas = {};
  return <AuthContexts value={datas}>{children}</AuthContexts>;
};

export default AuthProvider;
