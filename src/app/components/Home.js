import React from "react";

export class Home extends React.Component {

	constructor(props){
		super();
		this.state = {
			age: props.initialAge,
			homeLink: props.initialLinkName
		}
	}

	onMakeOlder(){
		this.setState({
			age: this.state.age + 2
		});
	}

	onChangeLink(){
		this.props.changeLink(this.state.homeLink);
	}

	onHandleChange(event){
		this.setState({
			homeLink: event.target.value
		})
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
				<hr/>
				<button onClick={this.props.greet}>Greet!</button>
				<hr/>
				<input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} />
				<button onClick={this.onChangeLink.bind(this)}>Change Header Name</button>
			</div>
		);
	}
}

/*Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number
}*/