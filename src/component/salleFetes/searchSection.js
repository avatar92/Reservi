import React, { Component } from 'react';
import './searchSectionSalleFete.css';
import {connect} from 'react-redux'
class SearchSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input:''
        }
    }
    render() {
        console.log(this.state.input)
    return (
        <div className="search-section">
            <div className="wrapper">
                <div className="slideshows">
                    <div className="slideshow slideshow--hero">
                        <div className="slides">
                            <div className="slide slide2000"></div>
                            <div className="slide slide2001"></div>
                            <div className="slide slide2002"></div>
                        </div>
                    </div>
                    <div className="slideshow slideshow--contrast slideshow--contrast--before">
                        <div className="slides">
                            <div className="slide slide2000"></div>
                            <div className="slide slide2001"></div>
                            <div className="slide slide2002"></div>
                        </div>
                    </div>
                    <div className="slideshow slideshow--contrast slideshow--contrast--after">
                        <div className="slides">
                            <div className="slide slide2000"></div>
                            <div className="slide slide2001"></div>
                            <div className="slide slide2002"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-inner-section m-auto">
                <form className="search">
                    <div className="a-field search__field">
                        <input type="text" id="query" className="r-text-field a-field__input search__input" placeholder="cherchez votre salle" value={this.state.input} required onChange={(e)=>this.setState({input:e.target.value})} />
                        <button className="r-button search__button search__clear" type="reset">
                            <span className="search__clear-label">Clear the search form</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" className="search__icon search__icon-clear">
                                <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" />
                            </svg>
                        </button>
                        <label className="a-field__label-wrap search__hint" for="query">
                            <span className="a-field__label">Que cherchez vous?</span>
                        </label>
                    </div>
                    <button className="r-button search__button search__submit" type="submit">
                        <span className="search__submit-label">Cherchez</span>
                        <svg  onClick={(e)=>{this.props.searchSalleFete(this.state.input)
                            this.setState({ input: '' })
                                e.preventDefault()}}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966" className="search__icon search__icon-search">
                            <path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z" />
                        </svg>
                    </button>
                    
                </form>
            </div>
        </div>
    )
}
}
const mapDispatchToProps = dispatch => {
    return {
        searchSalleFete: (searchTerm) => {
            dispatch({
                type: 'SEARCH_SALLE_FETE',
                searchTerm
            })
        }
        
    }
}

export default connect(null,mapDispatchToProps)(SearchSection)