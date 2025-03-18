import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { employeeList, setEmployeeList } = useContext(AuthContext); // Updated to use object destructuring
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Find the employee with the matching name
    if (!Array.isArray(employeeList)) {
      alert("Employee data not available");
      return;
    }
    
    const assignedEmployeeIndex = employeeList.findIndex(
      (employee) => employee.name.toLowerCase() === assignTo.toLowerCase()
    );
    
    if (assignedEmployeeIndex !== -1) {
      // Create the new task object
      const newTask = {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: title,
        description: description,
        date: date,
        category: category,
      };

      // Create a new array with the updated employee data
      const updatedEmployeeList = [...employeeList];
      const assignedEmployee = {...updatedEmployeeList[assignedEmployeeIndex]};

      // Add the new task to the employee's tasks
      assignedEmployee.tasks.push(newTask);
      // Update the task count
      assignedEmployee.taskCount.new += 1;

      // Update the employee in the array
      updatedEmployeeList[assignedEmployeeIndex] = assignedEmployee;

      // Update context with the new data
      setEmployeeList(updatedEmployeeList);

      // Update local storage
      localStorage.setItem("employees", JSON.stringify(updatedEmployeeList));

      // Clear the form
      setTitle("");
      setDate("");
      setAssignTo("");
      setCategory("");
      setDescription("");

      alert("Task assigned successfully!");
    } else {
      alert("Employee not found. Please check the name and try again.");
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={onSubmitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="task" className="block text-sm font-medium text-gray-700 mb-1">
              Task Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="task"
              type="text"
              placeholder="Enter task title"
              required
            />
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="date"
              type="date"
              required
            />
          </div>
          
          <div>
            <label htmlFor="employee" className="block text-sm font-medium text-gray-700 mb-1">
              Assign to
            </label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="employee"
              type="text"
              placeholder="Enter employee name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="category"
              type="text"
              placeholder="design, development, etc."
              required
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
              placeholder="Enter detailed task description"
              required
            />
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Assign Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
