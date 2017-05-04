import React, {Component} from 'react'


class SearchBar extends Component {

  constructor(props){
    super(props)

    this.state = {
      term: ''
    };
  }; //END Constructor

  onSearchChange = (event) => {
    let term = event.target.value
    
    this.setState({
      term: term
    });
  }


  onSearchClick = (event) => {
    event.preventDefault()
    this.props.onVideoSearch(this.state.term);
  }

  render() {
    return (
      <form className="search-bar input-group col-md-6 col-md-offset-3" onSubmit={this.onSearchClick}>
        <input className="form-control" onChange={ this.onSearchChange }/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-default">Search</button>
        </span>
      </form>
    )    
  };


}

export default SearchBar;