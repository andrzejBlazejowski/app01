import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ItemRow.css';
import ItemRowControlPanel from './ItemRowControlPanel.js';

class ItemRow extends Component {
    render() {
        return (
            <li> 
                <input name="item" type="text" value="item"></input>
                <ItemRowControlPanel/>
            </li>
      );
    }
}

export default ItemRow;

