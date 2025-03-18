import React from "react";
import { FaCalendarAlt, FaExclamationTriangle, FaTag } from "react-icons/fa";

const FailedTask = ({
  active,
  newTask,
  failed,
  completed,
  title,
  description,
  date,
  category,
}) => {
  return (
    <div className="w-80 flex-shrink-0 bg-white rounded-xl shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
      <div className="p-5 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full flex items-center">
            <FaExclamationTriangle className="mr-1" size={10} /> FAILED
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
        <div className="flex-grow">
          <p className="text-gray-600 text-sm line-clamp-4 overflow-hidden">
            {description}
          </p>
        </div>

        {/* Failed Banner */}
        <div className="flex items-center justify-center bg-red-50 text-red-600 py-2 px-4 rounded-lg mt-4 text-sm">
          <FaExclamationTriangle className="mr-1" /> Task not completed
        </div>
      </div>
    </div>
  );
};

export default FailedTask;
