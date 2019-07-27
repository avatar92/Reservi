import React, { Component } from 'react';
import SalleItem from './salle_sport_item'
import './sallesport.css'
import {connect} from 'react-redux'

class SalleList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            currentPage:1, 
            dataDisplayedPerPage:9
        }
    }
    
    handleClick=(event)=> {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    render() {
            // console.log('myDataState:',this.state.data,'\n','myProps',this.props.salleEsthetiqueReducer)
            const {currentPage,dataDisplayedPerPage}=this.state; 
            const indexOfLastData=currentPage*dataDisplayedPerPage; 
            const indexOfFirstData=indexOfLastData-dataDisplayedPerPage;
            const currentDatas=this.props.salleSportReducer.slice(indexOfFirstData,indexOfLastData); 
            const renderData=currentDatas.map(el=><div key={el._id} className='col-lg-4 col-md-4 col-sm-6'>                    
            <SalleItem  salleName={el.salleName} img={el.img} location={el.location}/>
            </div>)
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(this.props.salleSportReducer.length / dataDisplayedPerPage); i++) {
              pageNumbers.push(i);
            }
    
            const renderPageNumbers = pageNumbers.map(number => {
              return (
                
                <li className='PaginationNumber'
                  key={number}
                  id={number}
                  onClick={this.handleClick}>
                
                  {number}
                
                </li>
              

              );
            }); 
            return ( 
            <div className='container SalleItemContainer'>
                <div className='row' >
                    {renderData}
                </div>
                <div className="PagesNumbers">
                  {renderPageNumbers}
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>

{
    return {
        salleSportReducer:state.salleSportReducer
    }
}  
export default connect(mapStateToProps,null)(SalleList);