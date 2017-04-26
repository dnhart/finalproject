import React, { PropTypes as T } from 'react'
import {Button} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import styles from './styles.module.css'
import Search from '../Search/Search.js'
export class Home extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
  }

  logout(){
    this.props.auth.logout()
    this.context.router.push('/login');
  }



  // showLogout(){
  //   var logout = document.createElement('li');
  //   var logoutLink = document.createElement('a');
  //   logoutLink.appendChild(document.createTextNode("Logout"));
  //   logoutLink.setAttribute("onClick", "{this.logout.bind(this)}")
  //   logoutLink.setAttribute("href","#");
  //   logout.appendChild(logoutLink);
  //   document.getElementById("mainMenu").appendChild(logout);

  // }

  render(){
       let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }
    // const logoutLink = this.logout.bind(this);
    // const { profile } = this.state
    // document.getElementById("menuLogout").setAttribute("onClick",logoutLink )
    // this.showLogout();
    return (

<div className="container">
		{/*<!-- Navbar -->*/}
		<nav className="navbar navbar-default" role="navigation">
			<div className="container-fluid">
				{/*<!-- Brand and toggle get grouped for better mobile display -->*/}
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">JobTool.com</a>
				</div>

				{/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul className="nav navbar-nav navbar-right" id="mainMenu">
						<li><a href="#">Profile</a></li>
						<li><a href="#">Job Console</a></li>
						<li><a href="#">Search</a></li>
            <li> <Button onClick={this.logout.bind(this)}>Logout</Button></li>
					</ul>
				</div>     
			</div>
		</nav>

  <div className="container">

        <div className="row">
         <div className={styles.root}>
        {/*<h3>Welcome {profile.name}!</h3>*/}

      </div>


          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
 
          {this.props.children}
        </div>
      </div>

          <footer>
            <hr />
            <p className="pull-right">
           <span id="indeed_at"><a title="Job Search" href="https://www.indeed.com" rel="nofollow" >jobs by <img alt="Indeed" src="https://www.indeed.com/p/jobsearch.gif"/></a></span>
            </p>
          </footer>
        </div>

      /*<div className={styles.root}>
        <h3>Welcome {profile.name}!</h3>
        <Button onClick={this.logout.bind(this)}>Logout</Button>
      </div>*/
    )
  }
}

export default Home;
