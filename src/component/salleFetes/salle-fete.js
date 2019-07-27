import React, { Component } from 'react';
import NavBar from '../navBar.js';
import Footer from '../footer.js';
import SearchSection from './searchSection.js';
import ListSalleFete from './salle-fete-list';

class SalleFete extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <NavBar />
                <SearchSection />
                <ListSalleFete/>
                <Footer/>
            </div>
        );
    }
}

export default SalleFete;