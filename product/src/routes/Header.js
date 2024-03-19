import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header className='header'>
        <h1 className='header__title'><NavLink>FakeStore</NavLink></h1>
        <nav className='nav'>
          <ul className='nav__flex'>
            <li className='nav__flex__item'><NavLink className="sex" to="/" style={({isActive}) => {
              return isActive ? {color: "rgb(134, 239, 172)",
                textDecoration: "underline"} : {}
            }} >Home</NavLink></li>
            <li className='nav__flex__item'><NavLink to="/catalog" style={({isActive, is}) => {
              return isActive ? {color: "rgb(134, 239, 172)",
                textDecoration: "underline"} : {}
            }} >Products</NavLink></li>
            <li className='nav__flex__item'><NavLink to="/contact" style={({isActive}) => {
              return isActive ? {color: "rgb(134, 239, 172)",
                textDecoration: "underline"} : {}
            }} >Contact</NavLink></li>
            <li className='nav__flex__item'><NavLink className="cart" to="/cart" style={({isActive}) => {
              return isActive ? {color: "rgb(134, 239, 172)",
                textDecoration: "underline"} : {}
            }} ></NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
