import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));