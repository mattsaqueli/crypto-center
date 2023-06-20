import React from 'react'
import { useParams } from 'react-router-dom'

const CryptoDetails = ({ cryptos }) => {
  const { id } = useParams()
  const crypto = cryptos.find(crypto => crypto.id === id)

  if(!crypto) {
    return (<h2>Sorry, we cannot find this coin...</h2>)
  } else {
    return (
      <div className='crypto-details'>
        <h1>{crypto.name} {crypto.symbol}</h1>
        <article>
          <p>Rank: {crypto.rank}</p>
          <p>Current price: ${crypto.priceUsd}</p>
          <p>Max supply: {crypto.maxSupply}</p>
          <p>Market cap: ${crypto.marketCapUsd}</p>
          <p>Volume 24hr: {crypto.volumeUsd24Hr}</p>

        </article>
      </div>
    )
  }
}

export default CryptoDetails