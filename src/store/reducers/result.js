import * as actionTypes from "../actions/actionTypes";
import UpdatedObject from "../utility";
import updatedObject from "../utility";

const initialState = {
  results:[]
}

const reducer = (state= initialState,action)=>{

  switch(action.type){
    case actionTypes.STORERESULT:
      return UpdatedObject(state,{results: state.results.concat({id:new Date() , value:action.results})});
    case actionTypes.DELETERESULT: 
    const updatedResult = state.results.filter((ele)=>{ 
      return ele.id !== action.id}
      )
      return updatedObject(state, {results: updatedResult});
  }

  return state;
}

export default reducer;