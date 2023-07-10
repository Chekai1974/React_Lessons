import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav2() {
  return (
      <>
          <NavLink to="/" className={({isActive})=> isActive ? "active-link": ""}>Home</NavLink>
          <NavLink to="posts" className={({isActive})=> isActive ? "active-link": ""}>Posts</NavLink>
          <NavLink to="basket" className={({isActive})=> isActive ? "active-link": ""}>Basket</NavLink>
      </>
  )
}

export default Nav2