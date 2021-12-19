import React from 'react';
import TodoListItem  from '../todo-list-item/todo-list-item';
import './todo-list.css';
const TodoList = ( {todos} ) => {

  const elements = todos.map((item) => {
    return (
    <li key = { item.id } className = "list-group-item">
      <TodoListItem { ...item }
      onDeleted={() => console.log('Deleted')}/>
    </li>
    );
  });

  return (
    <ul className = "list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
