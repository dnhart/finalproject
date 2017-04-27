// Include React as a dependency
import React, { PropTypes as T } from 'react'

// Include the Query and Results components
import UserInfo from './userInfo'
// Include the helpers for making API calls
import helpers from '../../../utils/helpers'
import AuthService from 'utils/AuthService'
// var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
// Create the Search component
export class Profile extends React.Component{

  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

//   constructor(props, context) {
//     super(props, context)
//     this.state = {
//       profile: props.auth.getProfile()
//     }
//     props.auth.on('profile_updated', (newProfile) => {
//       this.setState({profile: newProfile})
//     })
//   }
 constructor(props) {
        super(props);
        this.state = { 
            user: {}
    }
 }

  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
//   setQuery(newQuery, newLocation) {
//     helpers.runQuery(newQuery, newLocation, data => {
//       this.setState({ results: data });
    
//     })
//     console.log(this.state.user);
//   }
// setUser(){
//     const profile = localStorage.profile;
//     // let userEmail = profile.email;
//     helpers.getUser(profile, data =>{
//          this.setState({user: data});
//     })
//     console.log('from setUser: '+this.state.user)
   
// }

  // Render the component. Note how we deploy both the Query and the Results Components
  render() {
    // let children = null;
   
    // if (this.props.children) {
    //   children = React.cloneElement(this.props.children, {
    //     auth: this.props.route.auth //sends auth instance to children
    //   })
    // }
    // const { profile } = this.state
    // console.log("Render Results", this.state.results);

    return (
      <div className="main-container">
		    <div className="row">
			    <div className="col-xs-12">
                  <UserInfo user={this.state.user} />
        {/* Note how we pass in the results into this component */}
            {/*<Profile profile={this.state.user} />*/}
          </div>
        </div>
      </div>
    );
  }
}

// Export the module back to the route
export default Profile;
