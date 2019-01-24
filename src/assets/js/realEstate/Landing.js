import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Landing extends Component {
  render(){
    return(
      <div id='landing'>
        <div className="landingHeader">
          <h1>Find your perfect home today.</h1>
          <Link to="/properties"><button type="button" className="btn btn-danger landingButtonStyle">Find Now</button></Link>
        </div>
      </div>
    )
  }
}

export default Landing;
