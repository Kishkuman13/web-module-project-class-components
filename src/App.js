import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.scss'

const todoList = [
  {
    task: 'Complete projects',
    id: 1234567890123,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList:todoList
    }
  }

  addTask = (newTask) => {
    this.setState({
      todoList:
      [
        ...this.state.todoList,
        {
          task: newTask,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  toggleCompleted = (taskId) => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => {
        return !item.completed
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='header'>
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </header>
        <section>
          <TodoList todoList={this.state.todoList} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted} />
        </section>
      </div>
    );
  }
}

export default App;
