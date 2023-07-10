import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { newPostAction } from '../actions/newPostrAction'
function PostForm() {
    const dispatch = useDispatch()
    const [title,setTitle]=useState('')
    const [body, setBody] = useState('')
    const handelSunmit = (e) => {
        e.preventDefault()
        const post = {
            title,
            body
        }
        dispatch(newPostAction(post))
        setBody("")
        setTitle("")
    }
  return (
      <form onSubmit={handelSunmit}>
          <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
          <input type="text" placeholder='body' value={body} onChange={(e) => setBody(e.target.value)} />
          <button>Add Post</button>
    </form>
  )
}

export default PostForm