import { useState, createContext, useEffect } from "react";
import axios from "axios"

const MyContext = createContext()

const MyContextProvider = ({children}) => {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data)=> setPosts(data))
    }, [])
    
    const addPost = (newPost) => {
        axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
            .then(res => {
                setPosts([res.data, ...posts]);
            });
    }
    const deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(()=>setPosts(posts.filter(post => post.id !== id)))
            
    }
    const getComents = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments/`)
            .then((res) => res.json())
            .then((data)=> setComments(data))
    }
    return ( 
        <MyContext.Provider value={{ posts, addPost, deletePost, getComents, comments }}>
            {children}
        </MyContext.Provider>
    )
}
export {MyContext, MyContextProvider}
