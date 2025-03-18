import React, { useContext, useEffect, useState } from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";
import { useParams } from "react-router-dom";

const EmployeeDashboard = ({ handleLogout, data }) => {
  const [employeeDetail, setEmployeeDetail] = useState(null);
  const { employeeList } = useContext(AuthContext); // Updated to use object destructuring
  const { id } = useParams();

  useEffect(() => {
    if (Array.isArray(employeeList)) {
      const loggedInUser = localStorage.getItem("loggedUser");
      if (loggedInUser) {
        const loggedUserId = JSON.parse(loggedInUser).id;
        const foundEmployee = employeeList.find((e) => e.id === loggedUserId);
        setEmployeeDetail(foundEmployee);
      }
    } else {
      console.error("employeeList is not an array:", employeeList);
    }
  }, [employeeList]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <Header handleLogout={handleLogout} data={employeeDetail} />
        </div>
        
        {/* Task Statistics */}
        <div className="mb-6">
          <TaskListNumbers id={id} data={employeeDetail} />
        </div>
        
        {/* Task List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">Your Tasks</h2>
            <p className="text-sm text-gray-500 mt-1">Manage and track your assigned tasks</p>
          </div>
          <div className="p-6">
            <TaskList data={employeeDetail} />
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Employee Management System &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
