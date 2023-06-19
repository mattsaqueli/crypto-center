import React from 'react'
import './CryptoCards.css'
import { Link } from 'react-router-dom'

const Cryptos = (props) => {
  const cryptoCards = props.displayCryptos.map(crypto => {
    return (
      <Link to={`/crypto/${crypto.id}`} className='crypto-card' key={crypto.id}>
        <h3>{crypto.name}</h3>
        <h4>{crypto.symbol}</h4>
        <h5>${crypto.priceUsd}</h5>
      </Link>
    )
  })

  return (
    <div className='crypto-container'>
      {cryptoCards}
    </div>
  )
}

export default Cryptos
