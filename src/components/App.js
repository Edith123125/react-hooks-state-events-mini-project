import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import { TASKS, CATEGORIES } from '../data';


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onCategorySelect={handleCategorySelect} 
      />
      <TaskList tasks={filteredTasks} onTaskDelete={handleTaskDelete} />
      <NewTaskForm categories={CATEGORIES.filter(category => category !== 'All')} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
}

export default App;
