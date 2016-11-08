import React,{Component} from 'React'
import {Icon} from 'antd-mobile';
import './subHeader.css'

export default class SubHeader extends Component{
	 constructor(props) {
	 	super(props);
	 	
	 }
	 back = (e) => {
	 	console.log(e.target.id)
	 	history.go(-1)
	 }
	 render(){
	 	return (
	 		<header className="bar">
	 			<Icon className="white backIcon" onTouchEnd={this.back}  type="left"/>
	 			<h1 className="title">{this.props.children}</h1>
	 		</header>
	 		)
	 }
}