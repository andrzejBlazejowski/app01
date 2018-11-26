import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ItemsList.css';
import ItemRow from './ItemRow';


class ItemsList extends Component {
    render() {
        return (
            <ul>
                <ItemRow/>
                <ItemRow/>
                <ItemRow/>
            </ul>
      );
    }
}

export default ItemsList;