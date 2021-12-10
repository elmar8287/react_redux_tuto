import React from 'react';
import './todo-list-item.css';

const TodoListItem = ( {label, important = false} ) => {  
  const style = {
    color: important ? 'tomato' : 'black'
  };
  
  return (
    <span>
      <span style = { style }> { label} </span>
      <button type="button" className="item-btn">
        Delete
      </button>
      <button type="button" className="item-btn">
        Mark
      </button>
    </span>
  );
};

export default TodoListItem;
