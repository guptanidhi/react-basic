import React from "react";

/*export class Header extends React.Component {
	render(){
		return(
			<nav>
				<ul>
					<li><a href="#">Home</a></li>
				</ul>
			</nav>
		);
	}
}*/

export const Header = (props) => {
	return(
		<nav>
			<ul>
				<li><a href="#">{props.homeLink}</a></li>
			</ul>
		</nav>
	);
};