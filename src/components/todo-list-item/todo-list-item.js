import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState (({done}) => {
      return {
        done: !done
      };
    });
  };

  onMarkImportant = () => {
    this.setState (({important}) => {
      return {
        important: !important
      };
    });
  };

  render () {
    const { done, important} = this.state;
    const {label} = this.props;

    let classNames = '';
    if (done) {
      classNames += 'done';
    }

    if (important) {
      classNames += 'important';
    }
   
    return (
      <span>
        <span 
          className={classNames}
          onClick={this.onLabelClick}>
          { label }
        </span>

        <button type="button" className="item-btn">
          <span
          onClick={this.props.onDeleted}>
            Delete</span>
        </button>
  
        <button type="button" className="item-btn"
          onClick={this.onMarkImportant}>
          <span>Important</span>
        </button>
      </span>
    );
  };
};
