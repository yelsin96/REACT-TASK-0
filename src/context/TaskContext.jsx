import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTasks(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length + 1,
        descripcion: task.descripcion,
      },
    ]);
  }

  function deletTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTasks,
        deletTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
