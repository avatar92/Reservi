import React from 'react';
import './App.css';
import NavBar from './component/navBar'
import './component/navBar.css'
import './component/homepage/section.js'
import './component/homepage/section.css'
import Section from './component/homepage/section.js';
import BarRecherche from './component/homepage/bar-derecherche'
import IntroductionSection from './component/homepage/introductionSection.js'
import CardSection from './component/homepage/cardsection'
import Footer from './component/footer.js'
import Devs from './component/homepage/devs.js'

function App() {
  return (
    <div>
      <NavBar/>
      <IntroductionSection/>
      <CardSection/>
      <Devs/>
      <Footer/>
    </div>
  );
}

export default App;
