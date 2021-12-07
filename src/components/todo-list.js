import React from 'react';
import TodoListItem  from './todo-list-item';

const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem label = 'Learn React' /></li>
      <li><TodoListItem label = 'Make fit' /></li>
    </ul>
  );
};

export default TodoList;
