import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Landing extends Component {
  render(){
    return(
      <div>
        <div id='landing'>
          <div className="landingHeader container">
            <h1>Search for your perfect home today.</h1>
            <Link to="/properties"><button type="button" className="btn btn-danger btn-large landingButtonStyle"><i className="fas fa-home"></i>Residential</button></Link>
            <Link to="/properties"><button type="button" className="btn btn-danger btn-large landingButtonStyle"><i className="fas fa-building"></i>Commercial</button></Link>
          </div>
        </div>
        <div className="container">
          <p className="ok"> OK </p>
        </div>
      </div>
    )
  }
}

export default Landing;
