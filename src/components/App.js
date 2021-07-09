import React from 'react';
import Header from './Header';
import TodoItems from './TodoItems';
import todosData from '../todosData';

//Todo App
/**
 * Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
*/ 
// <input type = "checkbox"/> is how you make a checkbox
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todosData
    };

    this.handleChange = this.handleChange.bind(this);
  }
  // inline style needs curly brackets around the js part of the code...there would be two sets of curly brackets if there wasn't a variable because objects need curly brackets too (dashes for names can't be used, replace them with camel case)
  
  // this method updates the state so that the item clicked refers to an id and it flips the state. So if a checked box is unchecked, its state is changed from true to false. A new version of the state is returned using the map method
  handleChange(id) {
    // the map method creates a new array of the updated states so that the originals(prevState) aren't directly changed
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id == id){
          return { // this return is where there's no direct change
            ...todo, // the spread operator (...) is used to include all elements of an object/array 
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  render(){
      const todoItems = this.state.todos.map(item => <TodoItems key = {item.id} item = {item} handleChange = {this.handleChange}/>)
      return (
        <div className = "todo-list">
          <Header />
          {todoItems}
        </div>
      );
  }
}

export default App;
