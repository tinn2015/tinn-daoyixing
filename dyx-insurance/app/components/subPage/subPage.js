import React,{Component} from 'react'
import SubHeader from '../subHeader/subHeader'
import './subPage.css'
import 'animate.css'

export default class Subpage extends Component{
	constructor(props) {
		super(props);
			
	}
	componentDidMount() {
		console.log(this.subPage_.className)
	}
	componentWillUnmount() {
		console.log(1)
		
	}
	render(){
		return(
			<div ref={(div) => this.subPage_ = div} id="subPage" className="animated slideInRight" >
				<SubHeader>{this.props.params.id}</SubHeader>
				<div className="content align-center">
					暂未添加数据
				</div>
			</div>
			)
	}
}