import React,{Component} from 'react';
import 'whatwg-fetch';
import {Toast,List,InputItem} from 'antd-mobile';
import 'animate.css'
import {Link} from 'react-router'

import SubHeader from '../components/subHeader/subHeader'
import Banner from '../components/banner/banner'
import Form from '../components/form/form'

import '../style/base.css'
import './layout.css'

export default class Detail extends Component{
	constructor(props) {
		super(props);
		
	}
	
	render(){
		return(
			<div>
				<SubHeader>保险详情</SubHeader>
				<div className="content">
					<Banner source="../assets/images/22.jpg" height="5rem"/>
					<List>
						<Link to='/detail/subPage/保险详情' ><List.Item className="fonto7rem" arrow="horizontal">骑车人意外身故残疾险3万元</List.Item></Link>	
					</List>
					<Form/>
					<div className='notice'>
						<ol className="font07rem">
							投保须知：
							<li>1、被保险人年龄为18~65周岁保险方为有效。</li>
							<li>2、每一位保险人限投一份，多投无效。</li>
							<li>3、请认真填写姓名与身份证号，输入错误后将无法激活。</li>
						</ol>
					</div>	
				</div>
			</div>
			)
	}
}