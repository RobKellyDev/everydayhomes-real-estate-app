import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from "../../images/logo3.png";

export default class Header extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <header>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <Link to="/"><img src={logo} className="logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav navbar ml-auto">
                <Link to="/properties"><div className="nav-item nav-link active">Buy <span className="sr-only">(current)</span></div></Link>
                <Link to="/properties"><div className="nav-item nav-link active">Sell <span className="sr-only">(current)</span></div></Link>
                <Link to="/properties"><div className="nav-item nav-link active">Rent <span className="sr-only">(current)</span></div></Link>
                <Link to="/properties"><div className="nav-item nav-link active">About <span className="sr-only">(current)</span></div></Link>
                <Link to="/properties"><div className="nav-item nav-link active">Contact <span className="sr-only">(current)</span></div></Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
