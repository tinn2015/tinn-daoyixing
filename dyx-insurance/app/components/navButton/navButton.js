import React,{Component} from 'react'
import { Flex, Button,Toast } from 'antd-mobile'
import {Link} from 'react-router'
import './navButton.css'

export default class NavButton extends Component{
	constructor(props) {
		super(props)
		
	}
	activateInsurance = (e) => {
		console.log(this.tap.innerText)
	}
	queryInsurance = () => {
		Toast.info('暂时没有查询数据')
	}
	componentDidMount() {
		
	}
	render(){
		return(
			<div className="navBar flex-center">
	            <button className="align-center bg-1 nav-btn" onTouchEnd={this.activateInsurance} ref={(btn) => this.tap = btn}>
	            	<Link className="white" to={this.props.navPath}>{this.props.activate}</Link>
	            </button>
	            <button className="align-center bg-2 nav-btn" onTouchEnd={this.queryInsurance} >
	             	<Link className="white" to="#">查询保险</Link>
	            </button>
      		</div>
			)
	}
}