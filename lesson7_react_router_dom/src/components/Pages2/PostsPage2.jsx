import React from 'react'
import { Link } from 'react-router-dom'

function PostsPage2() {
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
  return (
      <>
          <h1>Posts</h1>
          {posts.map((elem) => {
              return (
                <div key={elem.id}>
                  <h2>Author: {elem.author}</h2>
                  <h3>{elem.title}</h3>
                  <Link to={`/posts/${elem.id}`}>Descriptions</Link>
                </div>
              )
          })}
      </>
  )
}

export default PostsPage2