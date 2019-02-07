import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../sass/main.scss';
import neighbourhoodguide from '../../../assets/images/neighbourhoodguide.jpg';
import graph from '../../../assets/images/graph.jpg';
import agents from '../../../assets/images/agents.jpg';


class Landing extends Component {
  render(){
    return(
      <div>
        <div id='landing'>
          <div className="landingHeader container">
            <h1>Find your perfect home today.</h1>
            <Link to="/properties"><button type="button" className="btn btn-danger btn-large landingButtonStyle"><i className="fas fa-home"></i>Residential</button></Link>
            <Link to="/properties"><button type="button" className="btn btn-danger btn-large landingButtonStyle"><i className="fas fa-building"></i>Commercial</button></Link>
          </div>
        </div>
        <div className="container">
          <div className="row">
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
          </div>
          <div className="row">
              <div className="col-sm-4 steps">
                <i className="far fa-money-bill-alt"></i>
                <p>1. Calculate your budget</p>
              </div>
              <div className="col-sm-4 steps">
                <i className="fas fa-home"></i>
                <p>2. Use our site to find your perfect home</p>
              </div>
              <div className="col-sm-4 steps">
                <i className="fas fa-users"></i>
                <p>3. Contact one of our helpful agents</p>
              </div>
          </div>
          <div className="row infoStyle">
            <div className="col-sm-5 infoImg">
              <img src={neighbourhoodguide} />
            </div>
            <div className="col-sm-7 my-auto infoText">
                <h3>Neighbourhood Guide</h3>
                <p>Find your perfect home and learn about nearby schools, public transport and grocery stores family with our neighbourhood guide.</p>
                <a><button type="button" className="btn btn-danger btn-large">Learn More</button></a>
            </div>
            <div className="col-sm-7 my-auto infoText">
                <h3>Latest Home Statistics </h3>
                <p>Get the latest statistics on condos and townhouses so that you can make the best decision when budgeting for your new home.</p>
            </div>
            <div className="col-sm-5 infoImg">
              <img src={graph} />
            </div>
            <div className="col-sm-5 infoImg">
              <img src={agents} />
            </div>
            <div className="col-sm-7 my-auto infoText">
                <h3>Our Agents Are Here To Help</h3>
                <p>Ready to look for a home? Our professional agents can help you find your perfect home and guide you through the whole process.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
