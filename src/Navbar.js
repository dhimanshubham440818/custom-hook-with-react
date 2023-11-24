import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
    <Link className='navlink' to="/">Home</Link>
    <Link className='navlink'to="/user">User</Link>
    </>
  )
}