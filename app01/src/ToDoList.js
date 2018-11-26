import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ToDoList.css';
import ControlPanel from './ControlPanel.js';
import ItemsList from './ItemsList.js'; 


class ToDoList extends Component {
    render() {
        return (
        <div>
            <ControlPanel/>
            <ItemsList/>
        </div>);
    }
}

export default ToDoList;