import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  // Cargar tareas desde localStorage al iniciar
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (Array.isArray(storedTasks)) {
      setTasks(storedTasks);
    }
  }, []);

  // Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
    toast.success("Tarea agregada correctamente");
  };

  const handleEditTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setSelectedTask(null);
    toast.success("Tarea actualizada correctamente");
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    toast.success("Tarea eliminada correctamente");
  };

  const handleDeleteMultiple = (taskIds) => {
    setTasks(tasks.filter((task) => !taskIds.includes(task.id)));
    toast.success("Tareas seleccionadas eliminadas correctamente");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">TODO LIST</h1>
      <TaskForm
        onAdd={handleAddTask}
        onEdit={handleEditTask}
        selectedTask={selectedTask}
      />
      <TaskList
        tasks={tasks}
        onEdit={setSelectedTask}
        onDelete={handleDeleteTask}
        onDeleteMultiple={handleDeleteMultiple}
      />
      <ToastContainer />
    </div>
  );
};

export default App;