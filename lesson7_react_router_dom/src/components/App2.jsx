import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav2 from "./Nav2"
import HomePage2 from './Pages2/HomePage2'
import PostsPage2 from './Pages2/PostsPage2'
import BaskePage2 from './Pages2/BaskePage2'
import NotFountPage2 from './Pages2/NotFountPage2'
import SinglePage2 from './Pages2/SinglePage2'

function App2() {
    return (
        <Router>
            <Nav2></Nav2>
            <Routes>
                <Route path='/' element={<HomePage2/>}></Route>
                <Route path='/posts' element={<PostsPage2/>}></Route>
                <Route path='/basket' element={<BaskePage2 />}></Route>
                <Route path='/posts/:id' element={<SinglePage2 />}></Route>
                <Route path='*' element={<NotFountPage2/>}></Route>
            </Routes>
        </Router>
    )
}

export default App2
