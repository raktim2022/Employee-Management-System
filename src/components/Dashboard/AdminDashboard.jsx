import React, { useContext, useEffect, useState } from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";
import { AuthContext } from "../../context/AuthProvider";
import { useParams } from "react-router-dom";

const AdminDashboard = ({ handleLogout }) => {
  const [idd, setId] = useState(null);
  const [admindetail, setadmindetail] = useState(null);
  const { adminList, employeeList } = useContext(AuthContext); // Updated to use object destructuring
  const employeeData = employeeList;
  const { id } = useParams();

  useEffect(() => {
    if (adminList) {
      const loggedInUser = localStorage.getItem("loggedUser");
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        setId(userData.id);
        setadmindetail(adminList.find((e) => e.id === userData.id));
      }
    }
  }, [adminList]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Header handleLogout={handleLogout} data={admindetail} />
        
        <div className="mt-8 grid gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">Assign New Task</h2>
              <p className="text-sm text-gray-500 mt-1">Create and assign tasks to your team members</p>
            </div>
            <CreateTask />
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">Team Overview</h2>
              <p className="text-sm text-gray-500 mt-1">Current task status for all employees</p>
            </div>
            <AllTask data={employeeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
