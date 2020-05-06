import * as actionTypes from "../store/actions";

const initialState = {
  counter: 0,
  results:[]
}

const reducer = (state= initialState,action)=>{

  switch(action.type){
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.STORERESULT:

      return {
        ...state,
        results: state.results.concat({id:new Date() , value:state.counter})
      }
    case actionTypes.STORERESULT: 
    const updatedResult = state.results.filter((ele)=>{ 
      ele.id !== action.id}
      )
      return {
        ...state,
        results: updatedResult
      }
  }

  return state;
}

export default reducer;