import React,{Component} from 'react';
import './banner.css'

export default class Image extends Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		return(
			<div className="banner" style={{height:this.props.height}}>
				<img className="banner-img" src={this.props.source}/>
			</div>
			)
	}
}