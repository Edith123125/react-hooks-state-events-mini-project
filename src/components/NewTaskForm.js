import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: Date.now(), text: taskText, category: category };
    onTaskFormSubmit(newTask);
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={handleTextChange}
        placeholder="New Task"
      />
      <select value={category} onChange={handleCategoryChange}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
