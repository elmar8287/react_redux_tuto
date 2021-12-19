import React from 'react';
import './app.css';
import AppHeader from '../app-header';
import SearchPanel from '../search-input';
import TodoList from '../todo-list';

const App = () => {

  const todoData = [
    { label: 'Learn React', important: true, id: 1 },
    { label: 'Drink coffee', important: false, id: 2 },
    { label: 'Make fir', important: true, id: 3 },
    { label: 'Spend time with family', important: true, id: 4 },
    { label: 'Have a rest', important: true, id: 5 }
  ];

  return (
    <div>
    <AppHeader />
    <SearchPanel />
    <TodoList todos =  { todoData }/>
  </div>
  );
};

export default App;
