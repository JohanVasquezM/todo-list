import React, { useState, useEffect } from "react";

const TaskForm = ({ onAdd, onEdit, selectedTask }) => {
  const [task, setTask] = useState({ description: "", state: "Por hacer" });

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTask) {
      onEdit(task);
    } else {
      onAdd(task);
    }
    setTask({ description: "", state: "Por hacer" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Descripción"
          className="form-control"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          value={task.state}
          onChange={(e) => setTask({ ...task, state: e.target.value })}
        >
          <option value="Por hacer">Por hacer</option>
          <option value="En progreso">En progreso</option>
          <option value="Finalizada">Finalizada</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        {selectedTask ? "Actualizar" : "Agregar"}
      </button>
    </form>
  );
};

export default TaskForm;