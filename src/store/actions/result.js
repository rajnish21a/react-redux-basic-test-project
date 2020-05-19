import * as actionTypes from "./actionTypes";

export const storeResult = (result)=>{
  return {
    type: actionTypes.STORERESULT,
    results:result
  }
}

export const deleteResult = (id)=>{
  return {
    type: actionTypes.DELETERESULT,
    id:id
  }
}