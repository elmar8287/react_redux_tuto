import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  render () {
    const {label, important = false} = this.props;

    const style = {
      color: important ? 'tomato' : 'black'
    };
    
    return (
      <span>
        <span 
          style = { style }> { label}
        </span>
  
        <button type="button" className="item-btn">
          Delete
        </button>
  
        <button type="button" className="item-btn">
          Important
        </button>
      </span>
    );
  };
};
