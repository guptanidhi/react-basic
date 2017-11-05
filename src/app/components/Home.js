import React from "react";

export class Home extends React.Component {

	constructor(props){
		super();
		this.state = {
			age: props.initialAge
		}
	}

	onMakeOlder(){
		this.setState({
			age: this.state.age + 2
		});
	}

	render(){
		return(
			<div>
				<p>In a new Component</p>
				<p>Your name is {this.props.name}, your age is {this.state.age}</p>
				<hr/>
				{this.props.children}
				<hr/>
				<button onClick={() => this.onMakeOlder()}>Make me older!</button>
			</div>
		);
	}
}

/*Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number
}*/