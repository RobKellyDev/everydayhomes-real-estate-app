import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Footer extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <footer className="footerStyle">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h4>Find Homes</h4>
              <Link to="/" className="footerText"><div>Condos for sale</div></Link>
              <Link to="/" className="footerText"><div>Condos for rent</div></Link>
              <Link to="/" className="footerText"><div>Townhouses for sale</div></Link>
              <Link to="/" className="footerText"><div>Townhouses for sale</div></Link>
              <Link to="/" className="footerText"><div>Sell your home</div></Link>
            </div>
            <div className="col-lg-3">
              <h4>Learn More</h4>
              <Link to="/" className="footerText"><div>About Everyday Homes</div></Link>
              <Link to="/" className="footerText"><div>Meet the team</div></Link>
              <Link to="/" className="footerText"><div>Neighbourhood guide</div></Link>
              <Link to="/" className="footerText"><div>Blog</div></Link>
              <Link to="/" className="footerText"><div>Terms of use</div></Link>
            </div>
            <div className="col-lg-3">
              <h4>Hours & Info</h4>
              <div className="footerTextNolink">Monday-Friday: 9:00 - 17:00</div>
              <div className="footerTextNolink">Saturday: 10:00 - 16:00</div>
              <div className="footerTextNolink">Enquiries: (789)-123-4567</div>
              <div className="footerTextNolink">Support: (345)-678-1234</div>
              <div className="footerTextNolink">edhomes@everydayhomes.com</div>
            </div>
            <div className="col-lg-3">
              <h4>Contact Us</h4>
              <Link to="/" className="footerContactStyle"><i className="fab fa-facebook"></i></Link>
              <Link to="/" className="footerContactStyle"><i className="fab fa-twitter-square"></i></Link>
              <Link to="/" className="footerContactStyle"><i className="fab fa-instagram"></i></Link>
              <Link to="/" className="footerContactStyle"><i className="fas fa-envelope"></i></Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
