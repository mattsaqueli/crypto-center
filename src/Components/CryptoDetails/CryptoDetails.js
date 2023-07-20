import React from 'react';
import { useParams } from 'react-router-dom';
import './CryptoDetails.css'; // Import your CSS file for this component

const CryptoDetails = ({ cryptos }) => {
  const { id } = useParams();
  const crypto = cryptos.find((crypto) => crypto.id === id);

  if (!crypto) {
    return <h2>Sorry, we cannot find this coin...</h2>;
  } else {
    const formattedPrice = (price) => parseFloat(price).toFixed(2);

    return (
      <div className='crypto-details'>
        <h1 className='crypto-name'>
          {crypto.name} ({crypto.symbol})
        </h1>
        <div className='crypto-info'>
          <p className='info-item'>Rank: {crypto.rank}</p>
          <p className='info-item'>Current Price: ${formattedPrice(crypto.priceUsd)}</p>
          <p className='info-item'>Max Supply: {crypto.maxSupply}</p>
          <p className='info-item'>Market Cap: ${formattedPrice(crypto.marketCapUsd)}</p>
          <p className='info-item'>Volume 24hr: {crypto.volumeUsd24Hr}</p>
        </div>
      </div>
    );
  }
};

export default CryptoDetails;
