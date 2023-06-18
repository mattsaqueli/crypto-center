import React from 'react'
import './Header.css'

const Header = () => {


  return (
    <header className='header-container'>
      <h1>Crypto Center</h1>
      <nav className='nav-bar'>
        <button>HOME</button>
        <button>FAVORITES</button>
        <button>FAQ</button>
        <input type='text' placeholder='Search...' className='search-bar'></input>
      </nav>
    </header>
  )
}

export default Header