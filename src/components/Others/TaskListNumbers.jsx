import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskListNumbers = ({ id, data }) => {
  const [userData] = useContext(AuthContext);
  const [taskCount, setTaskCount] = useState({ new: 0, completed: 0, active: 0, failed: 0 });

  useEffect(() => {
    if (data && data.taskCount) {
      setTaskCount(data.taskCount);
    }  
    if (userData && userData.taskCount) {
      setTaskCount(userData.taskCount);
    }
  }, [data, userData]);

  return (
    <div className="flex gap-4 items-center tracking-tighter mt-5 justify-evenly">
      <div className="w-1/4 h-36 p-4 rounded-lg bg-blue-500">
        <h2 className="text-2xl font-semibold">New Task</h2>
        <h2 className="text-7xl">{taskCount.new}</h2>
      </div>
      <div className="w-1/4 h-36 p-4 rounded-lg bg-green-400">
        <h2 className="text-2xl font-semibold">Completed Task</h2>
        <h2 className="text-7xl">{taskCount.completed}</h2>
      </div>
      <div className="w-1/4 h-36 p-4 text-black rounded-lg bg-yellow-400">
        <h2 className="text-2xl font-semibold">Accepted Task</h2>
        <h2 className="text-7xl">{taskCount.active}</h2>
      </div>
      <div className="w-1/4 h-36 p-4 rounded-lg bg-red-400">
        <h2 className="text-2xl font-semibold">Failed Task</h2>
        <h2 className="text-7xl">{taskCount.failed}</h2>
      </div>
    </div>
  );
};

export default TaskListNumbers;
