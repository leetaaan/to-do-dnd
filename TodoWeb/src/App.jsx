import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/task form/TaskForm";
import TaskColumn from "./components/task column/TaskColumn";
import Todo from "./assets/target.png";
import Doing from "./assets/to-do.png";
import Done from "./assets/sign.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const onDrop = (status, position) => {
    if (activeCard == null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    })
    setTasks(updatedTasks)
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title={"Cần làm"}
          icon={Todo}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title={"Đang thực hiện"}
          icon={Doing}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title={"Hoàn thành"}
          icon={Done}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
};

export default App;
