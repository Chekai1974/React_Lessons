import React from 'react'

function Post1({ post, changeMarked}) {
  return (
    <div>
          <h2 style={{ fontWeight: post.marked ? 900 : 300 }}>{post.title}</h2>
          <button onClick={() => changeMarked(post.id)}>
              {post.marked ? "Сделать неважным": "Сделать важным"}
          </button>
    </div>
  )
}

export default Post1