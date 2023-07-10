import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementNumMin } from '../actions/nubmer';

export default function Plus() {
    const state = useSelector((state) => state.clicer)
    const dispatch = useDispatch();
    const handelDencriment = () => {
        dispatch(incrementNumMin(2))
    }
  return (
      <div>
          <p>{state}</p>
          <button onClick={handelDencriment}>-2</button>
      </div>
  )
}
