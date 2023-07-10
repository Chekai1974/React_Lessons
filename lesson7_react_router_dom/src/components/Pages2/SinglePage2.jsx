import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function SinglePage2() {
    const posts = [
        {
            id: "1",
            title: "Lorem ipsum dolor sit amet.",
            descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, id.",
            author: "Paul"
        },
        {
            id: "2",
            title: "Lorem ipsum dolor sit amet.",
            descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, id.",
            author: "Viliam"
        },
        {
            id: "3",
            title: "Lorem ipsum dolor sit amet.",
            descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, id.",
            author: "Kristian"
        },
    ]
    const { id } = useParams()

    const navigate = useNavigate()

    const post = posts.find((elem) => elem.id === id)
    useEffect(() => {
        if (!post) {
            navigate("*")
            return null
        }
    },[])
    
  return (
      <>
          <h1>Author: {post.author}</h1>
          <p>Descriptions: {post.descriptions}</p>
      </>
  )
}

export default SinglePage2