import React, { Component} from 'react';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

import {setSearchField} from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchfield;
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users}));
	}

	render() {
		const {robots} = this.state;
		const { searchField} = this.props
		const filteredRobots = robots.filter(robots => {
			return robots.name.toLowerCase().includes(searchField.toLowerCase());
			})
		if(!robots.length) {
			return <h1>Loading</h1>
		} 
		else {
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.props.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
	);
	}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
