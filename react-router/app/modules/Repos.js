import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router'

export default class Repos extends Component{
	render(){
			return(<div>
				<h2>Repos</h2>
				<ul>
					<li><Link to="repos/reactjs/react-router">React Router</Link></li>
					<li><Link to="repos/facebook/react">React</Link></li>
				</ul>
				{this.props.children}
				<div><IndexLink to='/'>返回根路由</IndexLink></div>
				</div>)
		}
}
module.exports = Repos;