import React from 'react';

//you use a class-based component when you need to use state
class SearchBar extends React.Component {
  //event is a JS object that contains information about the event that just occured
  // onInputChange(event) {
  //   event.target.value
  // }

  state = { term: '' };
  //changing to an arrow function takes care of the 'cannot read state of undefined' error
  onFormSubmit = (event) => {
    event.preventDefault();
    //when using props in a class-based component, reference the props object with this.props
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        {/* here we reference back to the onFormSubmit function, so no need for () */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>

            {/* no () after onInputChange because onChange turns onInputChange into a callback function */}
            {/* we do not put parentheses whenever we pass a callback function to any eventhandler, like onChange*/}
            <input
              type="text"
              value={this.state.value}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
