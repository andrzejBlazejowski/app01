import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ItemRowControlPanel.css';
import ItemRow from './ItemRow';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaCheckCircleO from 'react-icons/lib/fa/check-circle-o';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';


class ItemRowControlPanel extends Component {
    render() {
        return (
            <span>
                <FaCheckCircle/> 
                <FaCheckCircleO/> 
                <FaTrashO />
            </span>
      );
    }
}

export default ItemRowControlPanel;