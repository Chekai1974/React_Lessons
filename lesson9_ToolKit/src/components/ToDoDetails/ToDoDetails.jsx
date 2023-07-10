import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchToDoById } from '../../Store/Slices/ToDoSlice'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


function ToDoDetails() {
    const { todoId } = useParams()
    const dispatch = useDispatch()

    const status = useSelector((state) => state.todo.todoStatus);
    const todo = useSelector((state) => state.todo.currentTodo);


    useEffect(() => {
        dispatch(fetchToDoById(todoId))
    }, [dispatch, todoId])
    
    if (status === "Loading") {
        return (
            <h1>Loading</h1>
        )
    }
    if (status === "Rejected") {
        return (
            <h1>No Post!</h1>
        )
    }

  return (
      <div><h1>{todo.title}</h1></div>
  )
}

export default ToDoDetails;