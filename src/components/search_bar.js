import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {
    return(

      <div className="search-bar">
      <span className="bla">Search</span>
        <input
           value={this.state.term}
           onChange={event => this.onInputChange(event.target.value)}
           />
      </div>

    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }


}



export default SearchBar;
