import React, { useContext, useEffect, useState } from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";
import { useParams } from "react-router-dom";

const EmployeeDashboard = ({handleLogout,data}) => {

  const [idd,setId]=useState(null);
  const [employeedetail,setemployeedetail]=useState(null);
  const [userData,setUserData,AdminData] = useContext(AuthContext)
  const employeeData = userData;
  const { id }=useParams()
  

  useEffect(()=>{
    if(userData){
      const loggedInUser = localStorage.getItem("loggedUser");
      if (loggedInUser) {
        setId(JSON.parse(loggedInUser).id);
        setemployeedetail(employeeData.find((e)=>e.id===idd))
      }
    }
  },[employeedetail,employeeData])
  
  return (
    <div className="w-full h-full p-7 select-none">
      <Header handleLogout={handleLogout} data={employeedetail} />
      <TaskListNumbers id={id} data={employeedetail}/>
      <TaskList data={employeedetail}/>
    </div>
  );
};

export default EmployeeDashboard;
