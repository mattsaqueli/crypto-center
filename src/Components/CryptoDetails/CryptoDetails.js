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
        <h1>{crypto.name}</h1>
      </div>
    )
  }
}

export default CryptoDetails