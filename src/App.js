import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './assets/js/realEstate/Header.js';
import Footer from './assets/js/realEstate/Footer.js';
import Filter from './assets/js/realEstate/Filter.js';
import Listings from './assets/js/realEstate/Listings.js';
import Landing from './assets/js/realEstate/Landing.js';
import Properties from './assets/js/realEstate/Properties.js';
import About from './assets/js/realEstate/About.js';
import Contact from './assets/js/realEstate/Contact.js';
import listingsData from './assets/js/realEstate/data/listingsData.js';
import './assets/sass/main.scss';

class App extends Component {

  render () {
    return (
      <Router>
        <div>
          <Header />
            <section id="content-area">
               <Route exact path="/" component={Landing} />
               <Route exact path="/properties" component={Properties} />
               <Route exact path="/about" component={About} />
               <Route exact path="/contact" component={Contact} />
            </section>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
