import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch(query)
  }

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
          value={searchQuery}
          onChange={handleChange}
        />
      </nav>
    </header>
  )
}

export default Header
