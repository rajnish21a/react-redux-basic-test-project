import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/index";

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
                <button onClick={()=>{this.props.onStoreResultClick(this.props.ctr)}}>Store Result</button>
                <ul>
                    {updateList}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispachToProps = (dispatch)=>{
    return {
        onIncrementClicked: ()=>{dispatch(actionCreator.increment())},
        onDecrementClicked: ()=>{dispatch(actionCreator.decrement())},
        onAddClicked: ()=>{dispatch(actionCreator.add(5))},
        onSubtractClicked: ()=>{dispatch(actionCreator.subtract(5))},
        onStoreResultClick: (result)=>{dispatch(actionCreator.storeResult(result))},
        onDeleteResult:(id)=>{dispatch(actionCreator.deleteResult(id))}
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Counter);