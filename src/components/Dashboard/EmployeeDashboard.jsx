import React, { useContext, useEffect, useState } from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";
import { useParams } from "react-router-dom";

const EmployeeDashboard = ({ handleLogout, data }) => {
  const [employeeDetail, setEmployeeDetail] = useState(null);
  const [userData] = useContext(AuthContext); // Ensure userData is from AuthProvider
  const { id } = useParams();

  useEffect(() => {
    if (Array.isArray(userData)) {
      const loggedInUser = localStorage.getItem("loggedUser");
      if (loggedInUser) {
        const loggedUserId = JSON.parse(loggedInUser).id;
        const foundEmployee = userData.find((e) => e.id === loggedUserId);
        setEmployeeDetail(foundEmployee);
      }
    } else {
      console.error("userData is not an array:", userData);
    }
  }, [userData]);

  return (
    <div className="w-full h-full p-7 select-none">
      <Header handleLogout={handleLogout} data={employeeDetail} />
      <TaskListNumbers id={id} data={employeeDetail} />
      <TaskList data={employeeDetail} />
    </div>
  );
};

export default EmployeeDashboard;
