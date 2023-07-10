import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchToDos } from "../Store/Slices/ToDoSlice";
import ToDoForm from "../ToDoFom/ToDoForm";
import ToDoList from "./ToFoList/ToDoList";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ToDoDetails from "./ToDoDetails/ToDoDetails";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchToDos())

  },[dispatch])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <ToDoForm></ToDoForm>
              <ToDoList></ToDoList>
            </>
          }>  
          </Route>
          <Route path="/todos/:todoId" element={<ToDoDetails/>}></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
