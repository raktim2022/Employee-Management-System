import React from "react";

const AllTask = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Employee Name
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              New Tasks
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Active Tasks
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Completed
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Failed
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr 
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"} 
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                      {item.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.role || "Employee"}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-sm font-medium bg-blue-100 text-blue-800 py-1 px-2 rounded-full inline-block min-w-[28px]">
                    {item.taskCount.new}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-sm font-medium bg-yellow-100 text-yellow-800 py-1 px-2 rounded-full inline-block min-w-[28px]">
                    {item.taskCount.active}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-sm font-medium bg-green-100 text-green-800 py-1 px-2 rounded-full inline-block min-w-[28px]">
                    {item.taskCount.completed}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-sm font-medium bg-red-100 text-red-800 py-1 px-2 rounded-full inline-block min-w-[28px]">
                    {item.taskCount.failed}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                No employee data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllTask;
