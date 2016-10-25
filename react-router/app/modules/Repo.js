import React,{Component} from 'react';

export default class Repo extends Component{
	render(){
		return(
				<div>
					<h2>{this.props.params.repoName}</h2>
					<h2>{this.props.params.userName}</h2>
				</div>
			)
	}
}

module.exports = Repo;