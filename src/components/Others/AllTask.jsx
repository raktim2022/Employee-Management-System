import React, { useEffect, useState } from "react";

const AllTask = ({ data }) => {
  useEffect(() => {}, [data]);
  return (
    <div className="w-full mt-5 bg-zinc-900 h-fit gap-3 flex flex-col rounded-md p-7">
      <div className="bg-green-500 flex items-center rounded-md justify-between p-2 px-8 text-black">
        <h3 className="text-2xl w-1/5 capitalize font-semibold">employee name</h3>
        <h3 className="text-2xl w-1/5 text-center capitalize font-semibold">new Task</h3>
        <h3 className="text-2xl w-1/5 text-center capitalize font-semibold"> active task</h3>
        <h3 className="text-2xl w-1/5 text-center capitalize font-semibold"> completed task</h3>
        <h3 className="text-2xl w-1/5 text-center capitalize font-semibold"> failed task</h3>
      </div>
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className="border-green-500 border-[1px] flex items-center rounded-md justify-between p-2 px-8 text-black"
            >
              <h3 className="text-2xl w-1/5 capitalize font-semibold text-slate-400">
                {item.name}
              </h3>
              <h3 className="text-2xl w-1/5 text-center  capitalize font-light text-blue-400">
                {item.taskCount.new}
              </h3>
              <h3 className="text-2xl w-1/5 text-center  capitalize font-light text-yellow-400">
                {item.taskCount.active}
              </h3>
              <h3 className="text-2xl w-1/5 text-center  capitalize font-light text-green-400">
                {item.taskCount.completed}
              </h3>
              <h3 className="text-2xl w-1/5 text-center  capitalize font-light text-red-400">
                {item.taskCount.failed}
              </h3>
            </div>
          );
        })}
    </div>
  );
};

export default AllTask;
