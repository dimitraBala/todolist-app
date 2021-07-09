import React from 'react';

function TodoItems(props){
    const done = {
        fontStyle: "italic",
        color: "#9b9b9b",
        textDecoration: "line-through"
    }

    return(
        <div className = "todo-item">
            <input 
            type = "checkbox" 
            checked={props.item.completed} 
            onChange = {() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? done : null}>{props.item.text}</p>
        </div>
    )
}
export default TodoItems;