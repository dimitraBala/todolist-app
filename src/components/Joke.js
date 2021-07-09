import React from 'react';

function Joke(props){
    return (
        <div>
            <h3>{props.question}</h3>
            <h3>{props.answer}</h3>
        </div>
    )
}

export default Joke;