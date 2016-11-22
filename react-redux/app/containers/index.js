import Counter from '../components'
import * as CounterActions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


function mapStateToProps(state){
	return{
		counter:state.counter,
		userData:state.getUserData
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators(CounterActions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)