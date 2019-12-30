import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increaseCounter} from '../redux/actions/counterActions';
import {bindActionCreators} from 'redux'

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increaseCounter());
                }}> +1 </button>
            </div>
        )
    }
}


//Redux action bağlamak için
function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseCounter,dispatch)};
}

export default connect(mapDispatchToProps)(IncreaseCounter);