import React, { Component } from 'react';
import SalleItem from './salleItem.js'
import './salleList.css'
import {connect} from 'react-redux'

class SalleList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            currentPage:1, 
            dataDisplayedPerPage:8
        }
    }
    handleClick=(event)=> {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    render() {
            console.log('myDataState:',this.state.data,'\n','myProps',this.props.salleEsthetiqueReducer)
            const {currentPage,dataDisplayedPerPage}=this.state; 
            const indexOfLastData=currentPage*dataDisplayedPerPage; 
            const indexOfFirstData=indexOfLastData-dataDisplayedPerPage;
            const currentDatas=this.props.salleEsthetiqueReducer.slice(indexOfFirstData,indexOfLastData); 
            const renderData=currentDatas.map(el=><div key={el._id} className='col-3'>                    
            <SalleItem  salleName={el.salleName} img={el.img} location={el.location}/>
            </div>)
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(this.props.salleEsthetiqueReducer.length / dataDisplayedPerPage); i++) {
              pageNumbers.push(i);
            }
    
            const renderPageNumbers = pageNumbers.map(number => {
              return (
                <li className='PaginationNumber'
                  key={number}
                  id={number}
                  onClick={this.handleClick}
                >
                  {number}
                </li>
              );
            }); 
            return ( 
            <div className='container SalleItemContainer'>
                <div className='row' >
                    {renderData}
                </div>
                <div>
                    {renderPageNumbers}
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>

{
    return {
        salleEsthetiqueReducer:state.salleEsthetiqueReducer
    }
}  
export default connect(mapStateToProps,null)(SalleList);