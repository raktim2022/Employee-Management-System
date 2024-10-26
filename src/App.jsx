import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import HomePage from "./pages/HomePage";
import { Route, Router, RouterProvider, Routes, useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const [userData,SetUserData,AdminData] = useContext(AuthContext)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [userData]);
  const handleLogin = (email, password) => {
    if (userData && AdminData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      const admin = AdminData.find((e) => e.email === email);
      if (employee) {
        setUser("employee");
        const id = employee.id;
        const name = employee.name;
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({ role: "employee", id: id })
        );
        navigate(`/employee_dashboard/${name}`)
      } else if (admin) {
        setUser("admin");
        const id = admin.id;
        const name = admin.name;
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({ role: "admin", id: id })
        );
        navigate(`/admin_dashboard/${name}`)
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedUser");
    navigate("/")
  };

  return (
    <>
    <Routes>
        <Route path="/" element=<HomePage/>/>
        <Route path="/login" element=<Login handleLogin={handleLogin} />/>
        {user ? "" : <Route path="/" element=<HomePage/>/>}
        <Route path="/admin_dashboard/:name" element=<AdminDashboard handleLogout={handleLogout} />/>
        <Route path="/employee_dashboard/:name" element=<EmployeeDashboard handleLogout={handleLogout} />/>
    </Routes>
      
      {/* {user === "admin" ? (<AdminDashboard handleLogout={handleLogout}  /> ): ""}
      {user === "employee" ? (
        <EmployeeDashboard handleLogout={handleLogout}/>
      ) : (
        ""
      )} */}
    </>
  );
};

export default App;
