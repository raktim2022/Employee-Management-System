import React, { useEffect } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskContainer = ({
  active,
  newTask,
  failed,
  completed,
  title,
  description,
  date,
  category,
  onAccept,
  onComplete,
  onCancel
}) => {

 
  return (
    <>
      {newTask && active ? (
        <AcceptTask
          active={active}
          date={date}
          newTask={newTask}
          title={title}
          description={description}
          category={category}
          onComplete={onComplete}
        />
      ) : (
        ""
      )}
      {!newTask && active ? (
        <AcceptTask
          active={active}
          date={date}
          newTask={newTask}
          title={title}
          description={description}
          category={category}
          onComplete={onComplete}
        />
      ) : (
        ""
      )}
      {newTask && !active ? (
        <NewTask
          active={active}
          date={date}
          newTask={newTask}
          title={title}
          description={description}
          category={category}
          onAccept={onAccept}
          onCancel={onCancel}
        />
      ) : (
        ""
      )}
      {completed ? (
        <CompleteTask
          date={date}
          completed={completed}
          title={title}
          description={description}
          category={category}
        />
      ) : (
        ""
      )}
      {failed ? (
        <FailedTask
          date={date}
          failed={failed}
          title={title}
          description={description}
          category={category}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default TaskContainer;
