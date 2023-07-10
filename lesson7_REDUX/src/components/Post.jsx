import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addPost, deletePost } from '../actions/postAction'

function Post() {
    const [content, setContent]=useState('')
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    const handelAddPost = () => {
        const newPost = {
            id: Date.now(),
            content,
        }
        dispatch(addPost(newPost))
        setContent('')
    }
    const handelDeletePost = (id) => {
        dispatch(deletePost(id))
    }
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter post content"
        />
        <button onClick={handelAddPost}>Add Post</button>
      </form>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.content}</h3>
          <button onClick={() => handelDeletePost(post.id)}>Delete Post</button>
        </div>
      ))}
    </div>
  );
}

export default Post