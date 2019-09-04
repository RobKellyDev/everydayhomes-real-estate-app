import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from "../../images/logo4.png";
import contactagent from '../../../assets/images/agents.jpg';

export default class Contact extends Component{

  render(){
    return(
      <div id="contact">
        <div className="container">
          <div className="row">
            <form className="col-sm-6">
              <div className="contactFormText">If you have any questions or need help, please contact us using the form below.</div>
              <div className="row">
                <div className=" col-sm-6 form-group">
                  <label  for="exampleInputEmail1">First Name</label>
                  <input class="form-control" type="text" />
                </div>
                <div className=" col-sm-6 form-group">
                  <label  for="exampleInputEmail1">Last Name</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Query Type:</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>General Enquiries</option>
                  <option>Help & Support</option>
                  <option>Contact An Agent</option>
                  <option>Existing Customer Query</option>
                  <option>Report An Issue</option>
                </select>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" ></textarea>
              </div>
              <button type="submit" className="btn btn-danger">Submit</button>
            </form>
            <div className="col-sm-6">
              <img className="contactImage" src={contactagent} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
