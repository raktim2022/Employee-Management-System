import React from "react";
import { FaSignOutAlt, FaRegBell, FaRegUser } from "react-icons/fa";

const Header = ({ handleLogout, data }) => {
  const greetings = [
    "Hi",
    "Hey",
    "Hello",
    "Welcome",
    "Good day",
  ];
  const val = Math.floor(Math.random() * greetings.length);
  
  const currentHour = new Date().getHours();
  let timeBasedGreeting = "Good day";
  
  if (currentHour < 12) {
    timeBasedGreeting = "Good morning";
  } else if (currentHour < 18) {
    timeBasedGreeting = "Good afternoon";
  } else {
    timeBasedGreeting = "Good evening";
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h2 className="text-sm font-medium text-gray-500 mb-1">
          {timeBasedGreeting}, {greetings[val]}
        </h2>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-2">
          {data && data.name}
          <span className="text-yellow-500 text-2xl">👋</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
          <FaRegBell />
        </button>
        <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
          <FaRegUser />
        </button>
        <button 
          onClick={() => handleLogout()} 
          className="flex items-center gap-2 bg-white text-gray-700 hover:bg-red-500 hover:text-white font-medium py-2 px-4 rounded-lg border border-gray-200 hover:border-red-500 transition-colors"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
