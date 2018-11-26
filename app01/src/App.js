import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './ToDoList.js'
// ========================================
/*
ReactDOM.render(
  <div>
    <h2> To Do List: </h2>
    <div>show only not done <input type="checkbox" value="chaecked"></input></div>
    <ul>
      <li> <input name="item" type="text" value="item"></input> <FaCheckCircle/> <FaCheckCircleO/> <FaTrashO /> </li>
      <li> <input type="text" value="item"/> <FaCheckCircle/> <FaCheckCircleO/> <FaTrashO /> </li>
      <li> <input type="text" value="item"/> <FaCheckCircle/> <FaCheckCircleO/> <FaTrashO /> </li>
    </ul>
  </div>,
  document.getElementById('root')
);
*/
ReactDOM.render(
  <ToDoList/>,
  document.getElementById('root')
);