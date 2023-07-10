import React from 'react'
import "./ToDoItem.css"
import { useDispatch } from 'react-redux'
import { remove, changeStatus } from '../../Store/Slices/ToDoSlice'
import { useNavigate } from 'react-router-dom'
function ToDoItem({ id, title, done }) {
  const dispatch = useDispatch() 
  const navigate = useNavigate()

  const handelItemClick = () => {
    navigate(`/todos/${id}`)
  }

  return (

      <div className='item' onClick={handelItemClick}>
        <h4 className={done ? "task-done" : ""}>{title}</h4>
        <input type='checkbox' checked={done} onChange={()=>dispatch(changeStatus(id))}></input>
        <button onClick={()=>dispatch(remove(id))}>remove</button>
    </div>
  )
}

export default ToDoItem