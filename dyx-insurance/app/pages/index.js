import React,{Component} from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import {Toast,List} from 'antd-mobile';

import Nav from '../components/navButton/navButton'
import Banner from '../components/banner/banner'

import '../style/base.css'
import './layout.css'

export default class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			navPath:'',
			activate:'激活保险',
			listData:[]
		}
	}
	filterData = (data) => {
		data.forEach((e,index,arr) => {
			if(e.type == 0){
				this.setState({
					// e.type == 1 时
					// activate:'查询保险',   
					listData:e.listData,
					navPath:'/detail'
				})
			}
		})
	}
	fetchFn = () => {
		fetch('../testData.json')
		.then((response) => {console.log(response.status); return response.json()})
		.then((data) => {this.filterData(data)})
		.catch((err) => {console.log(err.message)})
	}

	componentWillMount() {
		this.fetchFn()
	}
	goAttention = () => {
		Toast.info('尚未添加该功能.')
	}
	render(){
		return(
			<div>
				<header className="bar flex-between">
					<img src="../assets/images/duoqi2.png" />
					<span onTouchEnd={this.goAttention}>去关注</span>
				</header>
				<nav className="nav">
					<Nav activate={this.state.activate} navPath={this.state.navPath}/>
				</nav>
				<div className="content">
					<Banner source="../assets/images/11.jpg" height="7.5rem"/>
					<List>
						{
							this.state.listData.map((data,index) => {
								return <List.Item wrap key={index}><span className="font07rem">{data.title}:</span> <span className="font07rem">{data.value}</span></List.Item>
							})
						}
					</List>
				</div>
				
			</div>
			)
	}
}

