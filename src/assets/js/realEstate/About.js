import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class About extends Component{

  render(){
    return(
      <div>
        <div id="about">
          <div className="container">
            <div className="aboutHeaderTitle"><h1>Why choose Everyday Homes?</h1></div>
            <div className="aboutHeaderText"><p>Everyday Homes is one of the most popular and comprehensive real estate websites for finding homes, our up to date listings and helpful agents can assist you in finding your perfect home for you and your family.</p></div>
          </div>
        </div>
        <div className="container">
          <div className="row allpanels">
            <div className="col-sm-4">
              <div className="panel"><div className="panelIcons"><i className="fas fa-chart-line"></i></div></div>
              <div className="panelBottom">The latest home prices</div>
            </div>
            <div className="col-sm-4">
              <div className="panel"><div className="panelIcons"><i className="fas fa-home"></i></div></div>
              <div className="panelBottom">The newest homes on the market</div>
            </div>
            <div className="col-sm-4">
              <div className="panel"><div className="panelIcons"><i className="fas fa-users"></i></div></div>
              <div className="panelBottom">Our agents are here to help</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
