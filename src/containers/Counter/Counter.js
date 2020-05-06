import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class Counter extends Component {

    render () {
        const updateList = this.props.storedResults.map(liResult => {
         return <li key={liResult.id} onClick={()=>{this.props.onDeleteResult(liResult.id)}} >{liResult.value}</li>
        })
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementClicked} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementClicked}  />
                <CounterControl label="Add 5" clicked={this.props.onAddClicked}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractClicked}  />
                <hr/>
                <button onClick={this.props.onStoreResultClick}>Store Result</button>
                <ul>
                    {updateList}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispachToProps = (dispatch)=>{
    return {
        onIncrementClicked: ()=>{dispatch({type:actionTypes.INCREMENT})},
        onDecrementClicked: ()=>{dispatch({type:actionTypes.DECREMENT})},
        onAddClicked: ()=>{dispatch({type:actionTypes.ADD, value:5})},
        onSubtractClicked: ()=>{dispatch({type:actionTypes.SUBTRACT, value:5})},
        onStoreResultClick: ()=>{dispatch({type:actionTypes.STORERESULT})},
        onDeleteResult:(id)=>{dispatch({type:actionTypes.DELETERESULT, id:id})}
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Counter);