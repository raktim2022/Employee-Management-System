import React, { useContext, useEffect, useState } from "react";
import TaskContainer from "./TaskContainer";
import { AuthContext } from "../../context/AuthProvider";
import { FaClipboardList } from "react-icons/fa";

const TaskList = ({ data }) => {
  const { employeeList, setEmployeeList } = useContext(AuthContext); // Updated to use object destructuring
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

          setUserData(prevUserData => ({
            ...prevUserData,
            tasks: employees[employeeIndex].tasks,
            taskCount: taskCount
          }));

          // Update the state in context
          if (Array.isArray(employeeList)) {
            const updatedEmployeeList = [...employeeList];
            updatedEmployeeList[employeeIndex] = {...employees[employeeIndex]};
            setEmployeeList(updatedEmployeeList);
          }
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

          setUserData(prevUserData => ({
            ...prevUserData,
            tasks: employees[employeeIndex].tasks,
            taskCount: taskCount
          }));

          // Update the state in context
          if (Array.isArray(employeeList)) {
            const updatedEmployeeList = [...employeeList];
            updatedEmployeeList[employeeIndex] = {...employees[employeeIndex]};
            setEmployeeList(updatedEmployeeList);
          }
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

          setUserData(prevUserData => ({
            ...prevUserData,
            tasks: employees[employeeIndex].tasks,
            taskCount: taskCount
          }));

          // Update the state in context
          if (Array.isArray(employeeList)) {
            const updatedEmployeeList = [...employeeList];
            updatedEmployeeList[employeeIndex] = {...employees[employeeIndex]};
            setEmployeeList(updatedEmployeeList);
          }
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
    <>
      {tasks && tasks.length > 0 ? (
        <div className="tasklist flex overflow-x-auto pb-6 items-stretch gap-6 w-full flex-nowrap">
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
              category={item.category || ''}
              onAccept={onAccept}
              onComplete={onComplete}
              onCancel={onCancel}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500">
          <FaClipboardList className="text-6xl mb-4 text-gray-300" />
          <p className="text-lg">No tasks found</p>
          <p className="text-sm">Tasks assigned to you will appear here</p>
        </div>
      )}
    </>
  );
};

export default TaskList;
