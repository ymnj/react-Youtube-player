import React, {Component} from 'react'


class SearchBar extends Component {

  constructor(props){
    super(props)

    this.state = {
      term: ''
    };
  };

  onSearchChange = (e) => {
    let value = e.target.value;

    this.setState({
      term: value
    });

  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.onSearchChange}/>
      </div>
    )    
  };


}

export default SearchBar;