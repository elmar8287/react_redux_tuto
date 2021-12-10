import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-input';
import TodoList from './components/todo-list';

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

ReactDOM.render(<App />, document.getElementById('root'));