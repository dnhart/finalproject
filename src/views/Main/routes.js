import React from 'react'
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router'
import AuthService from 'utils/AuthService'
import Container from './Container'
import Home from './Home/Home'
import Login from './Login/Login'
import Search from './Search/Search'
import Saved from './Saved/Saved'

const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__);

console.log(auth);


// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (

    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home/search" />
      <Route path="home" component={Home} onEnter={requireAuth}>
                {/*<IndexRedirect to="/Search" />*/}
      {/* If user selects Search or Saved show the appropriate component */}
            <Route path="Search" component={Search} onEnter={requireAuth}  />
            <Route path="Saved" component={Saved} auth={auth} />
        
        
        </Route>
      <Route path="login" component={Login} />
    </Route>

  )
}

export default makeMainRoutes
