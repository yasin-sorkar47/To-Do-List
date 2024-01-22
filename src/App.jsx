import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  let nexTaskId = (dada) => {
    let netId = dada.reduce((prev, current) => {
      return prev && prev.id > current.id ? prev.id : current.id;
    });

    return netId + 1;
  };

  // Handlers
  const addTaskHandler = (text) => {
    if (text !== "") {
      setTasks([
        ...tasks,
        {
          id: nexTaskId(tasks),
          text: text,
          done: false,
        },
      ]);
    }
  };

  const changeTaskHandler = (task) => {
    let nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(nextTask);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="toDo">
      <h1>To Do List</h1>
      <AddTask onAdd={addTaskHandler} />
      <TaskList
        tasks={tasks}
        onChangeTask={changeTaskHandler}
        onDeleteTask={deleteTaskHandler}
      />
    </div>
  );
}
