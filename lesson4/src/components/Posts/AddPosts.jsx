import React, {useState} from 'react'
import Form from './Form'

function AddPosts() {
    const [posts, setPosts] = useState([])
    function addNewPost(newPost) {
        setPosts((prevPost)=>[...prevPost, newPost])
    }
    return (
        <div>
            <h1>Your posts</h1>
            <Form addNewPost={addNewPost}></Form>
            <h3>List of your posts</h3>
            {
                posts.map((post, index) => (
                    <div key={index}>
                        <h4>{post.title}</h4>
                        <p>{post.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default AddPosts