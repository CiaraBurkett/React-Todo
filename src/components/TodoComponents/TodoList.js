import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="list">
      {props.todos.map(todo => (
        <Todo 
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;