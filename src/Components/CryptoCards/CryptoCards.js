import React from 'react'
import './CryptoCards.css'
import { Link } from 'react-router-dom'

const CryptoCards = ({ displayCryptos, addToWatchlist, removeFromWatchlist, isCryptoInWatchlist, searchQuery }) => {
  const formattedPrice = (price) => parseFloat(price).toFixed(2);

  const handleWatchlistToggle = (cryptoId) => {
    if (isCryptoInWatchlist(cryptoId)) {
      removeFromWatchlist(cryptoId);
    } else {
      addToWatchlist(cryptoId);
    }
  };

  const filteredCryptos = displayCryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cryptoCards = filteredCryptos.map((crypto) => (
    <tr className='crypto-card' key={crypto.id}>
      <td>{crypto.rank}</td>
      <td>
        <Link to={`/crypto/${crypto.id}`} className='crypto-info'>
          {crypto.name}
        </Link>
      </td>
      <td>{crypto.symbol}</td>
      <td>${formattedPrice(crypto.priceUsd)}</td>
      <td>${formattedPrice(crypto.marketCapUsd)}</td>
      <td>
        <button onClick={() => handleWatchlistToggle(crypto.id)} className='watchlist-btn'>
          {isCryptoInWatchlist(crypto.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </button>
      </td>
    </tr>
  ));

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
  );
};

export default CryptoCards;
