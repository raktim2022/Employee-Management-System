import React, { useContext, useEffect, useState } from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";
import { AuthContext } from "../../context/AuthProvider";
import { useParams } from "react-router-dom";

const AdminDashboard = ({ handleLogout }) => {
  const [idd, setId] = useState(null);
  const [admindetail, setadmindetail] = useState(null);
  const [userData, setUserData, AdminData] = useContext(AuthContext);
  const admin = AdminData;
  const employeeData = userData;
  const {id}= useParams()

  useEffect(() => {
    if (AdminData) {
      const loggedInUser = localStorage.getItem("loggedUser");
      if (loggedInUser) {
        setId(JSON.parse(loggedInUser).id);
        setadmindetail(admin.find((e) => e.id === idd));
      }
    }
  }, [admindetail, admin]);

  return (
    <div className="w-full p-7 tracking-tighter leading-none">
      <Header handleLogout={handleLogout} data={admindetail} />
      <CreateTask />
      <AllTask data={employeeData} />
    </div>
  );
};

export default AdminDashboard;
