import * as actionTypes from "./actionTypes";

export const increment = ()=>{
  return {
    type: actionTypes.INCREMENT
  }
}

export const decrement = ()=>{
  return {
    type: actionTypes.DECREMENT
  }
}

export const add = (value)=>{
  return {
    type: actionTypes.ADD,
    value: value
  }
}

const subtract1 = (value) =>{
  return {
    type: actionTypes.SUBTRACT,
    value: value
  }
}

export const subtract = (value)=>{
  return dispatch =>{
    setTimeout(() => {
      dispatch(subtract1(value));
    }, 2000);
  }
}