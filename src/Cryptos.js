import React from 'react'
import './Cryptos.css'

const Cryptos = (props) => {
  const cryptoCards = props.displayCryptos.map(crypto => {
    return (
      <div className='crypto-card'>
        <h3>{crypto.name}</h3>
        <h4>{crypto.symbol}</h4>
        <h5>{crypto.priceUsd}</h5>
      </div>
    )
  })

  return (
    <div className='crypto-container'>
      {cryptoCards}
    </div>
  )
}

export default Cryptos
