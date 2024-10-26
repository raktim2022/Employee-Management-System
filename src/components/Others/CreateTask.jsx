import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData, AdminData] = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Find the employee with the matching name
    const assignedEmployeeIndex = userData.findIndex(
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
      const updatedUserData = [...userData];
      const assignedEmployee = {...updatedUserData[assignedEmployeeIndex]};

      // Add the new task to the employee's tasks
      assignedEmployee.tasks.push(newTask);
      // Update the task count
      assignedEmployee.taskCount.new += 1;

      // Update the employee in the array
      updatedUserData[assignedEmployeeIndex] = assignedEmployee;

      // Update context with the new array
      setUserData(updatedUserData);

      // Update local storage
      localStorage.setItem("employees", JSON.stringify(updatedUserData));

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
    <div className="w-full mt-5 bg-zinc-900 h-fit rounded-md p-7">
      <form onSubmit={onSubmitHandler} className="flex gap-5">
        <div className="w-1/2 h-full gap-2 flex flex-col">
          <label htmlFor="task" className="text-lg">
            Task Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-zinc-800 p-2 rounded-md capitalize outline-none focus:outline-indigo-300"
            id="task"
            type="text"
            placeholder="Make a UI Design"
          />
          <label htmlFor="date" className="text-lg">
            Date
          </label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-zinc-800 p-2 w-1/4 capitalize rounded-md outline-none focus:outline-indigo-300"
            id="date"
            type="date"
            placeholder="date"
          />
          <label htmlFor="employee" className="text-lg">
            Assign to
          </label>
          <input
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="bg-zinc-800 p-2 w-1/2 capitalize rounded-md outline-none focus:outline-indigo-300"
            id="employee"
            type="text"
            placeholder="employee name"
          />
          <label htmlFor="category" className="text-lg">
            Category
          </label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-zinc-800 p-2 rounded-md capitalize outline-none focus:outline-indigo-300"
            id="category"
            type="text"
            placeholder="design, dev... etc"
          />
        </div>
        <div className="w-1/2  h-full gap-2 flex flex-col items-center">
          <label htmlFor="description" className="text-lg capitalize w-full">
            description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            className="bg-zinc-800 p-2 w-full rounded-md resize-none h-48 capitalize outline-none focus:outline-indigo-300"
            placeholder="description"
          />
          <input
            className="w-1/3 hover:bg-blue-800 cursor-pointer bg-blue-600 p-3 text-xl rounded-lg mt-3"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
