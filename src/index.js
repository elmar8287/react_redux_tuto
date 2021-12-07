import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-input';
import TodoList from './components/todo-list';


const App = () => {

  const todoData = [
    { label: 'Learn React', important: true },
    { label: 'Drink coffee', important: false },
    { label: 'Make fir', important: true }
  ];

  return (
    <div>
    <AppHeader />
    <SearchPanel />
    <TodoList todos =  { todoData }/>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));