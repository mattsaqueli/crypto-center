import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({ handleSearch }) => {


  return (
    <header className='header-container'>
      <h1>Crypto Center</h1>
      <nav className='nav-bar'>
        <Link to='/'>
          <button>HOME</button>
        </Link>

        <Link to='faq'>
          <button>FAQ</button>
        </Link>

        <Link to='watchlist'>
          <button>WATCHLIST</button>
        </Link>
        
        <input
          type='text'
          placeholder='Search...'
          className='search-bar'
          onChange={handleSearch}
        />

      </nav>
    </header>
  )
}

export default Header