const updatedObject = (oldState, updatedValue )=>{
  return {
    ...oldState,
    ...updatedValue
  }
}

export default updatedObject;