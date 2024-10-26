import React from "react";

const FailedTask = ({
    active,
    newTask,
    failed,
    completed,
    title,
    description,
    date,
  }) => {
  return (
    <div
      className={`w-1/4 flex-shrink-0 bg-red-400 rounded-lg h-72 text-ellipsis overflow-hidden p-5`}
    >
      <div className="flex justify-between items-center">
        <h3 className={`bg-red-600 uppercase py-1 px-2 rounded-lg`}>
          {failed ? "failed task" : ""}
        </h3>
        <h3 className="text-xl text-black font-semibold capitalize">{date}</h3>
      </div>
      <h2 className="text-2xl p-2 font-semibold">{title}</h2>
      <p className="h-36 text-lg text-ellipsis overflow-hidden ">
        {description}
      </p>
    </div>
  );
};

export default FailedTask;
