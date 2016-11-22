import React,{ Component } from 'react'

export default class App extends Component{
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		
	}

	render(){
		const { getDataAsync,increment,decrement,counter,userData,getUserData } = this.props
		return(
			<div>
				<h1>Test</h1>
				<p>Counter:{ counter }</p>
				<button onClick={ increment }>+</button>
				<button onClick={ decrement }>-</button>
				<p>----------</p>
				<button onClick={ getUserData }>getUserData</button>
				{
					userData.map((i,index,arr) => {
						return <p key={index}>Hello:{i.name}</p>
					})
				}
				
			</div>
			)
	}
}
