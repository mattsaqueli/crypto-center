import React from 'react'
import './CryptoCards.css'
import { Link } from 'react-router-dom'

const Cryptos = (props) => {
  const cryptoCards = props.displayCryptos.map(crypto => {
    const formattedPrice = parseFloat(crypto.priceUsd).toFixed(2)
    const formattedMarketCap = parseFloat(crypto.marketCapUsd).toFixed(2)

    return (
      <Link to={`/crypto/${crypto.id}`} className='crypto-card' key={crypto.id}>
        <h4>{crypto.rank}</h4>
        <h4>{crypto.name}</h4>
        <h4>{crypto.symbol}</h4>
        <h4>${formattedPrice}</h4>
        <h4>${formattedMarketCap}</h4>
      </Link>
    )
  })

  return (
    <table className='crypto-container'>
      <tr className='crypto-container-header'>
        <th>Rank</th>
        <th>Name</th>
        <th>Ticker</th>
        <th>Current Price</th>
        <th>Market Cap</th>
      </tr>
      {cryptoCards}
    </table>
  )
}

export default Cryptos
