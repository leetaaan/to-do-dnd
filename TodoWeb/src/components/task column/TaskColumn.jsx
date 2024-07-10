import React from "react";
import "./TaskColumn.css";
import TaskCard from "../task card/TaskCard";
import DropArea from "../drop area/DropArea";

const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} className="task_column_icon" />
        {title}
      </h2>
      <DropArea onDrop={(e) => onDrop(status, 0)} />
      {tasks.map(
        (task, i) =>
          task.status === status && (
            <React.Fragment key={i}>
              <TaskCard
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                i={i}
                setActiveCard={setActiveCard}
              />
              <DropArea onDrop={(e) => onDrop(status, i + 1)} />
            </React.Fragment>
          )
      )}
    </section>
  );
};

export default TaskColumn;
