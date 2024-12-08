import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, onDelete, onDeleteMultiple }) => {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const toggleSelection = (taskId) => {
    setSelectedTasks((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  };

  return (
    <div>
      <button
        className="btn btn-danger mb-3"
        onClick={() => onDeleteMultiple(selectedTasks)}
        disabled={selectedTasks.length === 0}
      >
        Borrar Selección
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleSelection={toggleSelection}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;