import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  
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
            className='cart__elements' style={{backgroundColor:checkItems(props.count).color}}>{checkItems(props.count).count}</p></NavLink></li>
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
