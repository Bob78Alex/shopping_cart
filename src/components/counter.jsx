import React, { Component } from 'react';

class Counter extends Component {


/*
	state = {
		value: this.props.counter.value,
		imageUrl: 'http://picsum.photos/200',
		//rendering list of items (tags)
		tags: ['tag1', 'tag2', 'tag3']
		

	};

	*/



	//constructor() {
		//super();
		//console.log("Increment clicked");
		//this.handleIncrement = this.handleIncrement.bind(this);
//
	//}


	/*handleIncrement = () => {
		console.log();
		this.setState({ value: this.state.count + 1})
	};
	*/

//Creating style object
	styles = {

		fontSize: 10,
		fontWeight: 'bold'

	};

	//renderTags() {
	//	if (this.state.tags.length === 0) return <p>There are no tags!</p>

//return <ul> { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>;

	//			}

   render() {

   		console.log('props', this.props);

		
		
		//{ this.state.tags.length === 0 && 'Please create a new tag' }/ /conditionally rendered content: 'string' is truthy
		//{ this.renderTags() }
		//{ this.props.children } //this is rendering h4 children inside each counter component)
		//<img 
		//src={this.state.imageUrl} 
		//alt='random picture'/>
		//
	return (
		<div>
				

		<span/*style={this.styles} style={{fontSize: 30}} */className={this.getBadgeClasses()}>
		{this.formatCount()}
		</span>


		<button 
		onClick={() => this.props.onIncrement(this.props.counter)} 
		className="btn btn-secondary btn-sm"> 
		Increment 
		</button>


		<button 
		onClick={() => this.props.onDelete(this.props.counter.id)} 
		className="btn btn-danger btn-sm m-2">
		Delete
		</button>

		</div>
			);
}


	getBadgeClasses() {
			let classes = "badge m-2 badge-";
			classes += (this.props.counter.value === 0) ? "warning" : "primary";
			return classes;
}


	formatCount() {
		//object restructured - count property was taken from state object
	/*	const {value} = this.state;*/
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}


}

export default Counter;