import React from "react";
import { render } from "react-dom";

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {

	constructor(){
		super();
		this.state = {
			homeLink: "Home"
		}
	}

	onGreet(){
		alert("Hello!");
	}

	onChangeLinkName(newName){
		this.setState({
			homeLink: newName
		});
	}

	render(){
		return(
			<div>
				<Header homeLink={this.state.homeLink}/>
				<Home 
					name={"Nidhi"} 
					initialAge={30} 
					greet={this.onGreet}
					changeLink={this.onChangeLinkName.bind(this)}
					initialLinkName={this.state.homeLink}>
					<p>Child Prop</p>
				</Home>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));