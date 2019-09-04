import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import agentm1 from "../../images/agentm1.jpg";
import agentm2 from "../../images/agentm2.jpg";
import agentm3 from "../../images/agentm3.jpg";
import agentm4 from "../../images/agentm4.jpg";
import agentw1 from "../../images/agentw1.jpg";
import agentw2 from "../../images/agentw2.jpg";
import agentw3 from "../../images/agentw3.jpg";
import agentw4 from "../../images/agentw4.jpg";

export default class About extends Component{

  render(){
    return(
      <div>
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="aboutHeaderTitle"><h1>Why choose Everyday Homes?</h1></div>
              </div>
              <div className="col-sm-12">
                <div className="aboutHeaderText"><p>Everyday Homes is one of the most popular and comprehensive real estate websites for finding homes, our up to date listings and helpful agents can assist you in finding your perfect home for you and your family.</p></div>
              </div>
            </div>
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
          <div className="row">
            <div className="col-sm-12">
              <h1 className="ourAgentsHeader">Our Agents</h1>
            </div>
          </div>
          <div className="row agentRow">
            <div className="col-sm-3">
              <img src={agentm1} className="agentImage"/>
              <div className="panelBottom">Joel Ernest</div>
            </div>
            <div className="col-sm-3">
              <img src={agentw1} className="agentImage"/>
              <div className="panelBottom">Lisa Ciaran</div>
            </div>
            <div className="col-sm-3">
              <img src={agentm2} className="agentImage"/>
              <div className="panelBottom">Micheal Jeremy</div>
            </div>
            <div className="col-sm-3">
              <img src={agentw2} className="agentImage"/>
              <div className="panelBottom">Chelsea Natasha</div>
            </div>
          </div>
          <div className="row agentRow">
            <div className="col-sm-3">
              <img src={agentm3} className="agentImage"/>
              <div className="panelBottom">Tony Allen</div>
            </div>
            <div className="col-sm-3">
              <img src={agentw3} className="agentImage"/>
              <div className="panelBottom">Isabella Jane</div>
            </div>
            <div className="col-sm-3">
              <img src={agentw4} className="agentImage"/>
              <div className="panelBottom">Thea Ayesha</div>
            </div>
            <div className="col-sm-3">
              <img src={agentm4} className="agentImage"/>
              <div className="panelBottom">Jack Austin</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
