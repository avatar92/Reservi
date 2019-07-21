import React, { Component } from 'react';
import SalleItem from './salleItem.js'
import './salleList.css'


class SalleList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='container SalleItemContainer'>
                <SalleItem/>
            </div>
        );
    }
}
 
export default SalleList;