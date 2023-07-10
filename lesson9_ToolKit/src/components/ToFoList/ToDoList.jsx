import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItem from '../ToDoItem/ToDoItem'

function ToDoList() {
    const list = useSelector(state => state.todo.list)
    const status = useSelector((state) => state.todo.status)
    if (status === "Loading") {
        return (
            <>
                <img src="https://i.stack.imgur.com/hzk6C.gif" alt="loading st" />
            </>
        )
    }
    if (status === "Rejected") {
        return (
            <>
                <h1>Sorry! Data are not found!</h1>
            </>
        )
    }
  return (
      <div>
          <h2>All your Todos!</h2>
          <div>
              {list.map((elem) => (
                  <ToDoItem key={elem.id} {...elem}></ToDoItem>
              ))}
          </div>
    </div>
  )
}

export default ToDoList