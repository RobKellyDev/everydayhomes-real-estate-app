import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../sass/main.scss';


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
          <div className="row">
            <div className="col-sm-6">
              <div className="statsBackground">
                <div className="statsTop">
                  Average home price sold in past 30 days.
                </div>
                <div className="statsMiddle">
                  <h1 className="statsMiddleBigNumber"><span className="statsMiddleDollar">$</span>689</h1>
                </div>
                <div className="statsBottom">
                  <i className="fas fa-arrow-up statsBottomStyle"><span className="statsBottomNumbers">2.84% 6 Months</span></i>
                  <i className="fas fa-arrow-down statsBottomStyle"><span className="statsBottomNumbers">2.13% 1 Year</span></i>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="statsBackground">
                <div className="statsTop">
                  Average values for the past year.
                </div>
                <div className="statsRow1">
                  Number of Transactions: <span className="statsValues"> 348 Sold / 548 Rented</span>
                </div>
                <div className="statsRow2">
                  Average rental price: <span className="statsValues"> $2209 / 620 sqft</span>
                </div>
                <div className="statsRow1">
                  Average sold price: <span className="statsValues"> $598,600 / 712 sqft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
