import React from 'react';

const TodoList = () => {
  const items = ['Learn React', 'Build App'];
  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
};

export default TodoList;
