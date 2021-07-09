import { defaultOptions } from 'acorn';
import React from 'react'; 
import ReactDOM from 'react-dom';

/* CHALLENGE: About Me?
* Create a functional component called MyInfo that returns the following:
* a. an h1 with your name
  b. a paragraph with a small sentence
  c. an ordered/unordered list 
* Render an instance of that functional component to the browser
*/
function MyInfo(){
    return (
      <div>
        <h1>Dimitra Balasingam</h1>
        <p>Heyo. I'm feeling accomplished cause I've finished like 4 of these online classes and I feel like I've learned a lot :) I'm looking forward to learning React now!</p>
        <h2>My Top 3 Recently Played Songs</h2>
        <ul>
          <li>Your Number (by SHINee)</li>
          <li>Sherlock (by SHINee)</li>
          <li>Hello (by SHINee)</li>
        </ul>
      </div>)
  }

  export default MyInfo