//store
const redux = require('redux');
const createStore = redux.createStore;
//const rootReducer;

const initialState = {
  counter: 0
}

// reducer
const rootReducer = (state = initialState, action)=>{
  if(action.type=="INC_COUNTER"){
      state = {
        ...state,
        counter: state.counter +1
      }
  }
  if(action.type=="ADD_COUNTER"){
    state = {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state;
}

const store = createStore(rootReducer);
console.log(store.getState())
// dispatching action

store.subscribe(()=>{
  console.log("Subscription", store.getState());
})

store.dispatch({type:'INC_COUNTER'});
console.log(store.getState());
store.dispatch({type:'ADD_COUNTER', value:10});
console.log(store.getState())
//Subscribing

