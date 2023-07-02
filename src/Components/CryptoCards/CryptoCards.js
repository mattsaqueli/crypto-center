import React from 'react'
import './CryptoCards.css'
import { Link } from 'react-router-dom'

const CryptoCards = ({ displayCryptos, addToWatchlist, removeFromWatchlist, isCryptoInWatchlist }) => {
  const cryptoCards = displayCryptos.map((crypto) => {
    const formattedPrice = parseFloat(crypto.priceUsd).toFixed(2)
    const formattedMarketCap = parseFloat(crypto.marketCapUsd).toFixed(2)

    const handleWatchlistToggle = () => {
      if (isCryptoInWatchlist(crypto.id)) {
        removeFromWatchlist(crypto.id)
      } else {
        addToWatchlist(crypto.id)
      }
    }

    return (
      <tr className='crypto-card' key={crypto.id}>
        <td>{crypto.rank}</td>
        <td>
          <Link to={`/crypto/${crypto.id}`} className='crypto-info'>
            {crypto.name}
          </Link>
        </td>
        <td>{crypto.symbol}</td>
        <td>${formattedPrice}</td>
        <td>${formattedMarketCap}</td>
        <td>
          <button onClick={handleWatchlistToggle} className='crypto-info'>
            {isCryptoInWatchlist(crypto.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}
          </button>
        </td>
      </tr>
    )
  })

  return (
    <table className='crypto-container'>
      <thead>
        <tr className='crypto-container-header'>
          <th>Rank</th>
          <th>Name</th>
          <th>Ticker</th>
          <th>Current Price</th>
          <th>Market Cap</th>
          <th>Watchlist</th>
        </tr>
      </thead>
      <tbody>{cryptoCards}</tbody>
    </table>
  )
}

export default CryptoCards
