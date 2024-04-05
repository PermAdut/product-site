import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartCount = useSelector((state) => state.cartCount)
  return (
    <div>
      <header className='header'>
        <h1 className='header__title'><NavLink to="/">FakeStore</NavLink></h1>
        <nav className='nav'>
          <ul className='nav__flex'>
            <li className='nav__flex__item'><NavLink to="/" style={({isActive}) => {
              return isActive ? {color: "rgb(134, 239, 172)", textDecoration: "underline"} : {}
            }} >Home</NavLink></li>
            <li className='nav__flex__item'><NavLink to="/catalog" style={({isActive}) => {
              return isActive ? {color: "rgb(134, 239, 172)", textDecoration: "underline"} : {}
            }} >Products</NavLink></li>
            <li className='nav__flex__item'><NavLink to="/contact" style={({isActive}) => {
              return isActive ? {color: "rgb(134, 239, 172)", textDecoration: "underline"} : {}
            }} >Contact</NavLink></li>
            <li className='nav__flex__item'><NavLink className="cart" to="/cart"><p 
            className='cart__elements' style={{backgroundColor:checkItems(cartCount).color}}>{checkItems(cartCount).count}</p></NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

function checkItems(prop) {
  if (prop < 1) return {
    count: "", 
    color: "inherit",
  }
  return {
    count: prop,
    color: "rgb(134 239 172/var(--tw-bg-opacity))"
  }
}
