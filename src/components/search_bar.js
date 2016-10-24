import React, { Component } from 'react';

class SearchBar extends Component {
//State is a plain JavaScript object that is a class based component
// When method is called that already exists on parent class (Component) then it can be called via super

	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
		<div>
		<input
			value={this.state.term}
			onChange={event => this.setState({term: event.target.value})} />
		 </div> 
		 );
	}
}

export default SearchBar;


//Value of the input: {this.state.term}
// return <input onChange={event => console.log(event.target.value) }/>;