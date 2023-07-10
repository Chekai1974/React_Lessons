import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../MyContext'
import PostItem from './PostItem'


function PostContainr() {
    const {posts} = useContext(MyContext)
    console.log(posts);
    return (
        <div>
            <h2>All posts</h2>
            {
            posts.map((elem) => (
                <PostItem key={elem.id} post={elem}></PostItem>
            ))}
        </div>
    )
}

export default PostContainr