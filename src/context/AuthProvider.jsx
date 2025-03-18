import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [employeeList, setEmployeeList] = useState(null);
  const [adminList, setAdminList] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { employeeData, adminData } = getLocalStorage();
    setEmployeeList(employeeData);
    setAdminList(adminData);
  }, []);

  // Provide context value as an object with named properties
  const contextValue = {
    employeeList,
    setEmployeeList,
    adminList,
    setAdminList
  };

  return (
    <div>
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
