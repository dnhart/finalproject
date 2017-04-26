// Include React as a dependency
import React, { PropTypes as T } from 'react'

// Include the Query and Results components
import Query from './Query'
import Results from './Results'

// Include the helpers for making API calls
import helpers from '../../../utils/helpers'

// var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
// Create the Search component
export class Search extends React.Component{

  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  // getInitialState() {
  //   return {
  //     results: {}
  //   };
  // }

 constructor(props) {
        super(props);
        this.state = { results: {}};
    }



  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  setQuery(newQuery, newLocation) {
    helpers.runQuery(newQuery, newLocation, data => {
      this.setState({ results: data });
    
    })
    console.log(this.state.results);
  }

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
			    <div className="col-md-8">
        {/* Note how we pass the setQuery function to enable Query to perform searches */}
            <Query updateSearch={this.setQuery.bind(this)} />
        {/* Note how we pass in the results into this component */}
            <Results results={this.state.results} />
          </div>
        </div>
      </div>
    );
  }
}

// Export the module back to the route
export default Search;
