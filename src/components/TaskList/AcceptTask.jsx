import React from "react";
import { FaCalendarAlt, FaClock, FaTag, FaCheckCircle } from "react-icons/fa";

const AcceptTask = ({
  active,
  newTask,
  failed,
  completed,
  title,
  description,
  date,
  category,
  onComplete
}) => {
  return (
    <div className="w-80 flex-shrink-0 bg-white rounded-xl shadow-md border-l-4 border-yellow-400 hover:shadow-lg transition-shadow">
      <div className="p-5 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full flex items-center">
            <FaClock className="mr-1" size={10} />
            {newTask && active ? "NEW & ACTIVE" : "ACTIVE TASK"}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <FaCalendarAlt className="mr-1" size={12} />
            {date}
          </div>
        </div>

        {/* Category */}
        {category && (
          <div className="mb-3 flex items-center text-gray-500 text-xs">
            <FaTag className="mr-1" /> {category}
          </div>
        )}

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>

        {/* Description */}
        <div className="flex-grow mb-4">
          <p className="text-gray-600 text-sm line-clamp-4 overflow-hidden">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-between gap-2 mt-auto pt-2 border-t border-gray-100">
          <button 
            onClick={() => onComplete(title, date)} 
            className="w-full flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            <FaCheckCircle className="mr-1" /> Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
