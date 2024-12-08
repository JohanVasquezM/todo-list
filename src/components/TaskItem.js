import React from "react";

const TaskItem = ({ task, onEdit, onDelete, onToggleSelection }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input
        type="checkbox"
        onChange={() => onToggleSelection(task.id)}
      />
      <div>
        <strong>{task.description}</strong> - <em>{task.state}</em>
      </div>
      <div>
        <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(task)}>
          Editar
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(task.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TaskItem;