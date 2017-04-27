// Include React as a dependency
import React, { PropTypes as T } from 'react'

// Include our helpers for API calls
// var helpers = require("../../../../utils/helpers");

// Results Component Declaration
class Results extends React.Component {

  // Here we will save states for the contents we save
  constructor(props) {
    super(props)
    this.state =  { 

    };
  }

  // This code handles the sending of the search terms to the parent Search component
  // handleClick() {
  //   console.log("CLICKED");
  //   console.log(item);

  //   // helpers.postSaved(item.headline.main, item.pub_date, item.web_url).then(function() {
  //   //   console.log(item.web_url);
  //   // });
  // }

  // A helper method for mapping through our articles and outputting some HTML
  /*renderArticles() {
    
    return this.props.results.map(function(job, index) {

      // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{article.headline.main}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={article.web_url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Article</button>
                </a>

                {/*
                  By using an arrow function callback to wrap this.handleClick,
                  we can pass in an article as an argument 
                }               
  //               <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Save</button>
  //             </span>
  //           </h3>
  //           <p>Date Published: {article.pub_date}</p>

  //         </li>

  //       </div>
  //     );

  //   }.bind(this));

  // }*/

  // // A helper method for rendering a container to hold all of our articles
  renderContainer() {
    let jobResults = this.props.results;
    return Object.keys(jobResults).map(function(keyName, index){
      console.log(jobResults[keyName])
      let job = jobResults[keyName];

     var snippet = job.snippet;
    snippet=snippet.replace(/<[a-zA-Z\/][^>]*>/g, '');
    console.log(snippet);
     
    return (
                <div className="panel panel-default" key={index}>
                  <div className="panel-heading">
                      <h4 className="panel-title">
                       {job.jobtitle} - {job.company} - {job.formattedLocation}  - {job.formattedRelativeTime}
                 
                      </h4>
                  </div>
                  <div className="panel-body">
                     <p>{snippet}</p>
                          <a href="#" className="btn-xs btn-default" style={{float:"right"}} data-id={job.jobkey}>Applied</a>

                          <a href="#" className="btn-xs btn-default" style={{float:"right"}} data-id={job.jobkey}>Apply Later</a>
                      
                          <a href={job.url} className="btn-xs btn-primary" target="_blank" style={{float:"right"}} data-id={job.jobkey}>Apply Now</a>
                  

                  </div>
                </div>
              
               )  
              }.bind(this));

  }
  

  render() {
    // If we have no articles, render this HTML
    if (!this.props.results) {
      return (
      <div className="panel panel-primary">
					<div className="panel-heading">
						<h1 className="panel-title"><strong>Job Results</strong></h1>
					</div>
					<div className="panel-body">
        <li className="list-group-item">
          <h3>
            <span>
              <em>Enter search terms to begin...</em>
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
						<h1 className="panel-title"><strong>Job Results</strong></h1>
					</div>
					<div className="panel-body">
          
                {this.renderContainer()}
      
          </div>
        </div>
    )
}
};

// Export the module back to the route
module.exports = Results;
