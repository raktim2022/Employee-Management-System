import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { 
  FaInbox, 
  FaCheckCircle,
  FaSpinner,
  FaExclamationTriangle 
} from "react-icons/fa";

const TaskListNumbers = ({ id, data }) => {
  const { employeeList } = useContext(AuthContext);
  const [taskCount, setTaskCount] = useState({ new: 0, completed: 0, active: 0, failed: 0 });

  useEffect(() => {
    if (data && data.taskCount) {
      setTaskCount(data.taskCount);
    }  
  }, [data]);

  const statCards = [
    {
      title: "New Tasks",
      count: taskCount.new,
      icon: <FaInbox className="text-white text-opacity-80" />,
      bgClass: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-600",
      textColor: "text-white"
    },
    {
      title: "Completed Tasks",
      count: taskCount.completed,
      icon: <FaCheckCircle className="text-white text-opacity-80" />,
      bgClass: "from-green-400 to-green-500",
      iconBg: "bg-green-500",
      textColor: "text-white"
    },
    {
      title: "Active Tasks",
      count: taskCount.active,
      icon: <FaSpinner className="text-gray-800 text-opacity-80" />,
      bgClass: "from-yellow-300 to-yellow-400",
      iconBg: "bg-yellow-400",
      textColor: "text-gray-800"
    },
    {
      title: "Failed Tasks",
      count: taskCount.failed,
      icon: <FaExclamationTriangle className="text-white text-opacity-80" />,
      bgClass: "from-red-400 to-red-500",
      iconBg: "bg-red-500",
      textColor: "text-white"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {statCards.map((card, index) => (
        <div 
          key={index} 
          className={`rounded-xl bg-gradient-to-br ${card.bgClass} shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
        >
          <div className="p-6 flex flex-col h-full relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <h2 className={`text-lg font-semibold ${card.textColor}`}>
                {card.title}
              </h2>
              <div className={`w-10 h-10 rounded-full ${card.iconBg} bg-opacity-80 flex items-center justify-center shadow-md`}>
                {card.icon}
              </div>
            </div>
            
            <h3 className={`text-5xl font-bold mt-3 ${card.textColor}`}>
              {card.count}
            </h3>
            
            <div className="absolute bottom-0 right-0 opacity-10 -mb-6 -mr-6">
              <div className="text-9xl">
                {card.icon}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;
