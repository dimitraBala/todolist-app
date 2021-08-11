import React, { useState } from 'react';
import Header from './Header';
import TodoItems from './TodoItems';
import todosData from '../todosData';

//Todo App
/**
 * Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
*/ 
// <input type = "checkbox"/> is how you make a checkbox

function App() {
  const [ todos, setTodos ] = useState(todosData)

  // this function applies the "change" when a task is clicked
  // when it's changed, different styles are applied to show that the task is finished
  function handleChange(id) {
    setTodos(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return{
        todos: updatedTodos
      }
    }
    )
  }
  const todoItems = todos.map(item => <TodoItems key = {item.id} item = {item} handleChange = {handleChange}/>)
      return (
        <div className = "todo-list">
          <Header />
          {todoItems}
        </div>
      )
  
}

export default App;
