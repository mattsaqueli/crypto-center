import React from 'react';
import './Watchlist.css';
import { Link } from 'react-router-dom'

const Watchlist = ({ watchlist, cryptos, removeFromWatchlist }) => {
  const cryptoWatchlist = watchlist.map((cryptoId) => {
    const crypto = cryptos.find(crypto => crypto.id === cryptoId);
    if (crypto) {
      const formattedPrice = parseFloat(crypto.priceUsd).toFixed(2);
      const formattedMarketCap = parseFloat(crypto.marketCapUsd).toFixed(2);

      const handleWatchlistToggle = () => {
        removeFromWatchlist(crypto.id);
      };

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
            <button onClick={handleWatchlistToggle} className='watchlist-btn'>
              Remove from Watchlist
            </button>
          </td>
        </tr>
      );
    } else {
      return null;
    }
  });

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
        {watchlist.length === 0 ? (
          <h2>Your watchlist is empty!</h2>
        ) : (
          cryptoWatchlist
        )}
    </table>
  );
};

export default Watchlist;
