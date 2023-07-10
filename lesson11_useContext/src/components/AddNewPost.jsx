import { useContext, useState } from 'react';
import { MyContext } from '../MyContext';

const AddNewPost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const { addPost } = useContext(MyContext)
    
    const handelSubmit = (e) => {
        e.preventDefault()
        const newPost = {
            title,
            body,
        }
        addPost(newPost)
        e.target.reset()
    }
    return (
        <div>
            <h2>Add Post</h2>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <textarea value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder='body'>
                </textarea>
                <button>Add Post</button>
            </form>
        </div>
    )
}
export default  AddNewPost;
