import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  return (
    <div className='todo-list'>
      {props.todoList.map(item => (
        <Todo key={item.id} todo={item} toggleCompleted={props.toggleCompleted} />
      ))}
      <button onClick={props.clearCompleted} className='clear-btn'>
        Clear Completed
            </button>
    </div>
  )
}

export default TodoList;