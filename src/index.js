// NOTE: Files/Names that start with a capital letter are React components
import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// the HTML/JSX elements (h1, p, etc) can't be rendered next to each other unless they're wrapped and counted as one element with two elements inside
ReactDOM.render(
 <div><h1>Hello World</h1><p>This is a paragraph</p></div>, document.getElementById("root")
);

/* // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */


// NOTE: The most recent render is printed ignoring the first (This is the MyInfo Challenge)
// the function is written as a self-closing component when called/referred to
ReactDOM.render(<App/>, document.getElementById("root")
);