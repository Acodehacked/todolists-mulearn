import React from 'react';

function TodoItem({ task, onDelete }) {
  return (
    <li>
      {task}
      <button className="delete-btn" onClick={onDelete}>🗑</button>
    </li>
  );
}

export default TodoItem;
