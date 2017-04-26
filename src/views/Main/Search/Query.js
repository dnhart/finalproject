// Include React as a dependency
var React = require("react");

// Query Component Declaration
var Query = React.createClass({

  // Here we set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      jobTitle: "",
      location: "",
      end: ""
    };
  },

  // Whenever we detect ANY change in the textbox, we register it.
  handleChange: function(event) {
    console.log("TEXT CHANGED");

    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // This code handles the sending of the search terms to the parent Search component
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("CLICKED");
    this.props.updateSearch(this.state.jobTitle, this.state.location);
  },

  // Here we render the Query component
  render: function() {
    // let children = null;
    // if (this.props.children) {
    //   children = React.cloneElement(this.props.children, {
    //     auth: this.props.route.auth //sends auth instance to children
    //   })
    // }
    const { profile } = this.state
    return (
        

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    Job Search
                  </strong>
                </h1>
              </div>
              <div className="panel-body">

                {/* Note how we associate the text-box inputs with the state values */}
                <form className="form-inline" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="jobTitle">Job Title: </label>
                    <input
                      type="text"
                      value={this.state.jobTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}
                      className="form-control"
                      id="jobTitle"
                      onChange={this.handleChange}
                      required
                    />

                    <label htmlFor="location">Location: </label>
                    <input
                      type="text"
                      value={this.state.location.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}
                      className="form-control"
                      id="location"
                      onChange={this.handleChange}
                      required
                    />
{/*
                    <h4><strong>End Year</strong></h4>*/}
{/*
                    <input
                      type="number"
                      value={this.state.end}
                      className="form-control"
                      id="end"
                      onChange={this.handleChange}
                      required
                    />*/}

                  </div>

                  {/* Here we create the onClick event that triggers the HandleSubmit */}
                  <div className="pull-right">
                    <button
                      type="submit"
                      className="btn btn-default"
                    >
                      Search
                    </button>
                  </div>
                </form>

              </div>
            </div>
       
    );
  }
});

// Export the module back to the route
module.exports = Query;
