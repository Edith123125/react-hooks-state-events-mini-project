import React from 'react';

function Task({ task, onTaskDelete }) {
  return (
    <li>
      <span>{task.text} - {task.category}</span>
      <button onClick={() => onTaskDelete(task.id)}>Delete</button>
    </li>
  );
}

export default Task;
