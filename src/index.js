import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const items = ['Learn React', 'Build App'];
  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
};

const AppHeader = () => {
  return (<h1>My Todo List</h1>);
};

const SearchPanel = () => {
  const searchText = 'Type here for search';
  const searchStyle = {
    fontSize: '15px'
  };

  return (<input 
    style = {searchStyle}
    placeholder = { searchText } />
  );
};

const App = () => {
  return (
    <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
  );
};

const el = <App />

ReactDOM.render(el, document.getElementById('root'));