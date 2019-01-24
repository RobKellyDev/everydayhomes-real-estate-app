import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from "../../images/logo2.jpg";

export default class Header extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <header>
        <div className="leftNav">
          <Link to="/" className="logo">
              <img src={logo} />
          </Link>
        </div>
        <div className="rightNav">
          <nav>
            <Link to="/properties">Buy</Link>
            <a href="#">Sell</a>
            <a href="#">Rent</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>
    )
  }
}
