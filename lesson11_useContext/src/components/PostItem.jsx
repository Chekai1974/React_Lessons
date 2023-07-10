import React, { useContext } from 'react'
import { MyContext } from '../MyContext'
import { Link} from 'react-router-dom'


function PostItem({post}) {
    const { deletePost } = useContext(MyContext)
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
            <Link to={`/post/${post.id}`} style={{textDecoration:"underline", cursor:"pointer"}}>View more</Link> 
        </div>
    )
}

export default PostItem