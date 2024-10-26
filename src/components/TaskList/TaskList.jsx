import React, { useContext, useEffect, useState } from "react";
import TaskContainer from "./TaskContainer";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data }) => {
  const [userData, setUserData, AdminData] = useContext(AuthContext);
  const [tasks, setTasks] = useState(data ? data.tasks : []);

  const onAccept = (title, date) => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser && loggedUser.id) {
      const employees = JSON.parse(localStorage.getItem("employees"));
      const employeeIndex = employees.findIndex(emp => emp.id === loggedUser.id);
      if (employeeIndex !== -1) {
        const taskIndex = employees[employeeIndex].tasks.findIndex(
          task => task.title === title && task.date === date
        );
        
        if (taskIndex !== -1) {
          const updatedTask = {
            ...employees[employeeIndex].tasks[taskIndex],
            active: true,
            newTask: false,
            completed: false,
            failed: false
          };

          const taskCount = employees[employeeIndex].taskCount;
          taskCount.active++;
          if (taskCount.new > 0) taskCount.new--;


          employees[employeeIndex].tasks[taskIndex] = updatedTask;
          employees[employeeIndex].taskCount = taskCount;
          localStorage.setItem("employees", JSON.stringify(employees));
          
          setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            newTasks[taskIndex] = updatedTask;
            return newTasks;
          });

          // Update user data in context
          setUserData(prevUserData => ({
            ...prevUserData,
            tasks: employees[employeeIndex].tasks,
            taskCount: taskCount
          }));
        }
      }
    }
  };

  const onComplete = (title, date) => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser && loggedUser.id) {
      const employees = JSON.parse(localStorage.getItem("employees"));
      const employeeIndex = employees.findIndex(emp => emp.id === loggedUser.id);
      if (employeeIndex !== -1) {
        const taskIndex = employees[employeeIndex].tasks.findIndex(
          task => task.title === title && task.date === date
        );
        
        if (taskIndex !== -1) {
          const updatedTask = {
            ...employees[employeeIndex].tasks[taskIndex],
            active: false,
            newTask: false,
            completed: true,
            failed: false
          };
          
          // Update taskCount
          const taskCount = employees[employeeIndex].taskCount;
          taskCount.active--;
          taskCount.completed++;

          employees[employeeIndex].tasks[taskIndex] = updatedTask;
          employees[employeeIndex].taskCount = taskCount;
          localStorage.setItem("employees", JSON.stringify(employees));
          
          setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            newTasks[taskIndex] = updatedTask;
            return newTasks;
          });

          // Update user data in context
          setUserData(prevUserData => ({
            ...prevUserData,
            tasks: employees[employeeIndex].tasks,
            taskCount: taskCount
          }));
        }
      }
    }
  };
  const onCancel = (title, date) => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser && loggedUser.id) {
      const employees = JSON.parse(localStorage.getItem("employees"));
      const employeeIndex = employees.findIndex(emp => emp.id === loggedUser.id);
      if (employeeIndex !== -1) {
        const taskIndex = employees[employeeIndex].tasks.findIndex(
          task => task.title === title && task.date === date
        );
        
        if (taskIndex !== -1) {
          const updatedTask = {
            ...employees[employeeIndex].tasks[taskIndex],
            active: false,
            newTask: false,
            completed: false,
            failed: true
          };
          
          // Update taskCount
          const taskCount = employees[employeeIndex].taskCount;
          taskCount.new--;
          taskCount.failed++;

          employees[employeeIndex].tasks[taskIndex] = updatedTask;
          employees[employeeIndex].taskCount = taskCount;
          localStorage.setItem("employees", JSON.stringify(employees));
          
          setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            newTasks[taskIndex] = updatedTask;
            return newTasks;
          });

          // Update user data in context
          setUserData(prevUserData => ({
            ...prevUserData,
            tasks: employees[employeeIndex].tasks,
            taskCount: taskCount
          }));
        }
      }
    }
  };

  useEffect(() => {
    if (data && data.tasks) {
      setTasks(data.tasks);
    }
  }, [data]);

  return (
    <div className="tasklist flex overflow-x-auto items-center gap-3 w-full flex-nowrap mt-4">
      {tasks.map((item, index) => (
        <TaskContainer
          key={index}
          active={item.active}
          date={item.date}
          newTask={item.newTask}
          failed={item.failed}
          completed={item.completed}
          title={item.title}
          description={item.description}
          onAccept={onAccept}
          onComplete={onComplete}
          onCancel={onCancel}
        />
      ))}
    </div>
  );
};

export default TaskList;
