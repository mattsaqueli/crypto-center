import React from 'react'
import './Header.css'

const Header = () => {


  return (
    <header className='header-container'>
      <h1>Crypto Center</h1>
      <nav className='nav-bar'>
        <button>HOME</button>
        <button>FAQ</button>
        <button>Watchlist</button>
        <input type='text' placeholder='Search...' className='search-bar'></input>
      </nav>
    </header>
  )
}

export default Header