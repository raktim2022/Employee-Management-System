import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);
  const [AdminData, setAdminData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { employeeData, adminData } = getLocalStorage();
    setuserData(employeeData);
    setAdminData(adminData)
    
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData, AdminData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
