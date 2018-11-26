import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ControlPanel.css';


class ControlPanel extends Component {
    render() {
        return (
            <div>
                <h2> To Do List: </h2>
                <div>show only not done <input type="checkbox" value="chaecked"></input></div>
            </div>
      );
    }
}

export default ControlPanel;