import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router'

export default class About extends Component{
	render(){
		return(
			<div>
				this is About, 
				<div><IndexLink to='/'>返回根路由</IndexLink></div>
			</div>
		)
	}
}
module.exports = About;