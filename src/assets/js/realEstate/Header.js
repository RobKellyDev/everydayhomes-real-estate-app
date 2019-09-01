import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from "../../images/logo3.png";

//Header component for app - contains nav bar
export default class Header extends Component {
  //Defines the navabr for the app - uses bootstrap; navbar-expand-lg - indicates the screen size for when icons will be hidden; navbar-toggler - creates the hamburger icon; ml-auto - shifts everything to the left
  render () {
    return (
      <header>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <Link to="/"><img src={logo} className="logo"/></Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navcollapseid">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcollapseid">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link to="/properties" className="nav-link">Buy</Link></li>
                <li className="nav-item"><Link to="/properties"className="nav-link">Sell</Link></li>
                <li className="nav-item"><Link to="/properties"className="nav-link">Rent</Link></li>
                <li className="nav-item"><Link to="/about"className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
