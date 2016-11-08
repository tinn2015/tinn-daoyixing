import React,{Component} from 'react';
import {Toast,} from 'antd-mobile';
import 'animate.css'
import {Link} from 'react-router'

import SubHeader from '../components/subHeader/subHeader'
import Banner from '../components/banner/banner'

import '../style/base.css'

export default class Insure extends Component{
	constructor(props) {
		super(props);
		
	}
	back = () =>{
		Toast.info('此时跳转到指定位置')
	}
	render(){
		return(
			<div>
				<SubHeader>投保成功</SubHeader>
				<div className="content">
					<ul className="text">
						<li>您的投保已提交！</li>
						<li>保单约七个工作日内可投保成功</li>
						<li>请余七个工作日后查询信息</li>
					</ul>
					<button className="btn mt10 white" onTouchEnd={this.back} >返回</button>
				</div>
			</div>
			)
	}
}