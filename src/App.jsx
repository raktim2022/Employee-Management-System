import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import HomePage from "./pages/HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { employeeList, adminList } = useContext(AuthContext); // Correctly destructure from AuthContext
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedUser');
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData);
      
      // Auto-redirect to dashboard if already logged in
      if(userData.role === "employee") {
        navigate(`/employee_dashboard/${userData.name}`);
      } else if(userData.role === "admin") {
        navigate(`/admin_dashboard/${userData.name}`);
      }
    }
  }, [navigate]); // Removed userData from dependencies to prevent issues
  
  const handleLogin = (email, password) => {
    if (Array.isArray(employeeList) && Array.isArray(adminList)) {
      const employee = employeeList.find((e) => email === e.email && e.password === password);
      const admin = adminList.find((e) => email === e.email && e.password === password);
      
      if (employee) {
        setUser("employee");
        const id = employee.id;
        const name = employee.name;
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({ role: "employee", id: id, name: name })
        );
        navigate(`/employee_dashboard/${name}`);
      } else if (admin) {
        setUser("admin");
        const id = admin.id;
        const name = admin.name;
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({ role: "admin", id: id, name: name })
        );
        navigate(`/admin_dashboard/${name}`);
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Authentication system error. Please try again later.");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route path="/admin_dashboard/:name" element={<AdminDashboard handleLogout={handleLogout} />} />
      <Route path="/employee_dashboard/:name" element={<EmployeeDashboard handleLogout={handleLogout} />} />
      <Route path="/demo" element={<HomePage />} />
      <Route path="/features" element={<HomePage />} />
      <Route path="/contact" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default App;
