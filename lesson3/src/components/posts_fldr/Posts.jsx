import React, { useState } from 'react'
import Post1 from './Post1'

function Posts() {
    const [posts, setPosts] = useState([
       {id:1, title: "Post 1", marked:false},
       {id:2, title: "Post 2", marked:false},
       {id:3, title: "Post 3", marked:true}
    ])

    const changeMarked = (id) => {
        setPosts((prevPosts) => {
            return prevPosts.map((post, index) => {
                if (post.id === id) {
                    return {...post, marked: !post.marked}
                }
                return post
            })
        })
    }

    return (
        <div>
            {
                posts.map((post, index) => {
                    return <Post1 key={index} post={post} changeMarked={changeMarked}></Post1>
                })
            }
        </div>
    )
}

export default Posts;