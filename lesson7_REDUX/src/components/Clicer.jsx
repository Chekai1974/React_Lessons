import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//useSelector, useDispatch
import { incrementNumPlus } from '../actions/nubmer';

function Clicer() {
    const number = useSelector((state) => state.posts)
    console.log(number);
  
    const dispatch = useDispatch()
  
    const handelIncriment = () => {
        dispatch(incrementNumPlus(6))
    }
  return (
      <div>
          
    </div>
  )
}

export default Clicer