import React, { Component } from 'react';
import './hostPost.css';
import HostPostCard from './hostPostCard.js';
import {connect} from 'react-redux';
class HostPost extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            currentPage:1, 
            dataDisplayedPerPage:6,
        }
        this.totalPage=1;
    }
    addPageNumber=()=>{
        if (this.state.currentPage<this.totalPage)
        {this.setState({
            currentPage:this.state.currentPage+1
        })}
    }
    losePageNumber=()=>{
        if (this.state.currentPage>=2)
        {this.setState({
            currentPage:this.state.currentPage-1
        })}
    }    
    changePage=(x)=> {
        this.setState({
          currentPage: x+1,
        }); 
        // document.getElementsByClassName("PaginationNumberadmin")[x].style.backgroundColor = "red";
    }
    
    render() {
            console.log('myDataState:',this.state.data,'\n','myProps',this.props.salleEsthetiqueReducer)
            const {currentPage,dataDisplayedPerPage}=this.state; 
            const indexOfLastData=currentPage*dataDisplayedPerPage; 
            const indexOfFirstData=indexOfLastData-dataDisplayedPerPage;
            const adminTab=this.props.salleEsthetiqueReducer.concat(this.props.salleSportReducer)
            const adminTab1=adminTab.concat(this.props.salleFeteReducer)
            const adminSearchTab=adminTab1.filter(el=>this.props.searchValue.trim()===''?true:el.salleName===this.props.searchValue||el.location===this.props.searchValue?el:'')
            const currentDatas=adminSearchTab.slice(indexOfFirstData,indexOfLastData); 
            const renderData=currentDatas.map(el=><div key={el._id} className='col-lg-4 col-md-4 col-sm-6'>                    
                <HostPostCard  salleName={el.salleName} img={el.img} location={el.location} _id={el._id}/>
            </div>)
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(adminSearchTab.length / dataDisplayedPerPage); i++) {
              pageNumbers.push(i);
            }
            this.totalPage=pageNumbers.length
            const renderPageNumbers = pageNumbers.map((number,index) =><div>
                {this.state.currentPage===index+1?<span 
                    style={{"background-color":"#00b39b"}}
                    className='PaginationNumberadmin'
                    key={index}
                    onClick={()=>this.changePage(index)}>
                    {number}
                </span>:
                <span className='PaginationNumberadmin'
                key={index}
                onClick={()=>this.changePage(index)}>
                {number}
                </span>
                }</div>
            ); 
            return ( 
            <div className='container SalleItemContainer'>
                <div className='row'>
                    <div className="AdminPagesNumbers col-12">
                        <span onClick={()=>this.losePageNumber()}>&laquo;</span>
                            {renderPageNumbers}
                        <span onClick={()=>this.addPageNumber()}>&raquo;</span>
                    </div>
                </div>
                <div className='row' >
                    {renderData}
                </div>
                
            </div>
        );
    }
}
const mapStateToProps=(state)=>

{
    return {
        salleEsthetiqueReducer:state.salleEsthetiqueReducer,
        salleSportReducer:state.salleSportReducer,
        salleFeteReducer:state.salleFeteReducer
    }
}

 
export default connect(mapStateToProps,null)(HostPost);
