import React from 'react';
import { FaBell, FaCalendarAlt, FaCheck, FaTimes, FaTag } from 'react-icons/fa';

const NewTask = ({
  active,
  newTask,
  failed,
  completed,
  title,
  description,
  date,
  category,
  onAccept,
  onCancel
}) => {
  return (
    <div className="w-80 flex-shrink-0 bg-white rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
      <div className="p-5 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full flex items-center">
            <FaBell className="mr-1" size={10} /> NEW TASK
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
            onClick={() => onAccept(title, date)} 
            className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
          >
            <FaCheck className="mr-1" /> Accept
          </button>
          <button 
            onClick={() => onCancel(title, date)} 
            className="flex-1 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-colors"
          >
            <FaTimes className="mr-1" /> Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;