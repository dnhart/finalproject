import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styles from './styles.module.css'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
 // We can only render a single div. So we need to group everything inside of this main-container one
<div className="content">
    
       {children}
</div>


      /*<Jumbotron>
        <h2 className={styles.mainTitle}>
          <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" />
        </h2>
        {children}
      </Jumbotron>*/
    )
  }
}

export default Container;
