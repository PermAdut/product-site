import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className='footer'>
          <p>Copyright &copy; PermAdut 2024</p>
          <NavLink to='https://github.com/PermAdut'></NavLink>
      </footer>
    </div>
  )
}
