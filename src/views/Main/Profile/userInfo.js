// Include React as a dependency
import React, { PropTypes as T } from 'react'

// Include our helpers for API calls
// var helpers = require("../../../../utils/helpers");

// Results Component Declaration
class UserInfo extends React.Component {

  // Here we will save states for the contents we save
  constructor(props) {
    super(props)
    this.state =  { 

    };
  }


    // let user = this.setState({user: localStorage.profile});
    // console.log(this.state.user)



 renderContainer() {
    let profile = JSON.parse(localStorage.getItem('profile'))
    // console.log(profile);
    let userDisplay = this.props.user;
    // return Object.keys(userDisplay).map(function(keyName, index){
    //   console.log(userDisplay[keyName])
    //   let user = userDisplay[keyName];
    //   this.props.updateUser(profile);
   
    return (
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h4 className="panel-title">
                        Hello, {profile.giver_name}!
                 
                      </h4>
                  </div>
                  <div className="panel-body">
                     
                     <p>this s good.</p>

                    {/*{userDisplay.email}*/}

                  </div>
                </div>
              
               );

  
 }
  

  render() {
    // If we have no articles, render this HTML
    console.log(this.props.user)
    if (!this.props.user) {
      return (
      <div className="panel panel-primary">
					<div className="panel-heading">
						<h1 className="panel-title"><strong>Profile</strong></h1>
					</div>
					<div className="panel-body">
        <li className="list-group-item">
          <h3>
            <span>
              <em>There is no User account. Please login.</em>
            </span>
          </h3>
        </li>
        </div>
      </div>
      );
    }
    // If we have articles, return this.renderContainer() which in turn, returns all the articles
    return (
        <div className="panel panel-primary">
					<div className="panel-heading">
						<h1 className="panel-title"><strong>Profile</strong></h1>
					</div>
					<div className="panel-body">
          
                {this.renderContainer()}
      
          </div>
        </div>
    )
}
};

// Export the module back to the route
module.exports = UserInfo;