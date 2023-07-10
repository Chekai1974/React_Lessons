import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, postsAction } from '../actions/postsAction'
import { useEffect } from 'react'
function Posts() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postReducer.posts)
    const error = useSelector((state) => state.postReducer.error)
    useEffect(() => {
       dispatch(postsAction()) 
    }, [])
    const handelClick = (postid) => {
        dispatch(deletePost(postid))
    }
    return (
        <>
            {error && <p>Error: {error}</p>}
            {
                posts.map((elem) => (
                    <div key={elem.id}>
                        <h3>Title{elem.id}: {elem.title}</h3>
                        <p style={{ color: "red" }}>Body: {elem.body}</p>
                        <button onClick={()=>handelClick(elem.id)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default Posts