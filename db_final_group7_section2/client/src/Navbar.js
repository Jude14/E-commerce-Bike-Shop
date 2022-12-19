import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './css/navbar.css'

const navbar = () => {
  const path = window.location.pathname

  function refreshPage() {
    window.location.reload(false)
  }

  const logout = () => {
    localStorage.clear()
    sessionStorage.clear()
    refreshPage();
  }


  return (
    <div>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__listlogo'>
            <img src={require('./pictures/bicycle.png')} alt='BikeShop' />
          </li>
            <h1 className='nav__listitem tl'>PedalNation</h1>

          <Link className='nav__listitem' to='home'>
            Home
          </Link>
          <Link className='nav__listitem' to='/products' location=''>
            All Products
          </Link>
          
          <Link className='nav__listitem' to='/onSale'>
            On Sale
          </Link>
          <Link className='nav__listitem' to='/about'>
            About
          </Link>

          {sessionStorage.getItem('User_ID') != null ? (
            <Link className='nav__listitem' onClick={logout} to='/SignIn'>
              Logout
            </Link>
          ) : (
            <Link className='nav__listitem' to='/SignIn'>
              Login/Sign Up
            </Link>
          )}

          <Link className='nav__listitem nav__listlogo rightmost' to='/cart'>
            <img id='icon' src={require('./pictures/cart.png')} alt='ggg' />
          </Link>
        </ul>
      </nav>
      <div class='distance'></div>
    </div>
  )
}

export default navbar
