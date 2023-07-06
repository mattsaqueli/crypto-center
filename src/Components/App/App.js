import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import * as apiCalls from '../../apiCalls'
import Cryptos from '../CryptoCards/CryptoCards'
import Header from '../Header/Header'
import CryptoDetails from '../CryptoDetails/CryptoDetails'
import Watchlist from '../Watchlist/Watchlist'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Cryptos: [],
      Watchlist: [],
      searchTerm: ''
    }    
  }

  componentDidMount = () => {
    this.getData()
    this.interval = setInterval(this.getData, 5000)
  }
  
  componentWillUnmount = () => {
    clearInterval(this.interval); 
  }
  
  getData = () => {
    apiCalls.getAllCryptos()
      .then((data) => {
        this.setState({
          Cryptos: data.data
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  addToWatchlist = (cryptoId) => {
    this.setState((prevState) => ({
      Watchlist: [...prevState.Watchlist, cryptoId]
    }))
  }

  removeFromWatchlist = (cryptoId) => {
    this.setState((prevState) => ({
      Watchlist: prevState.Watchlist.filter((id) => id !== cryptoId),
    }))
  }

  isCryptoInWatchlist = (cryptoId) => {
    return this.state.Watchlist.includes(cryptoId)
  }

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const filteredCryptos = this.state.Cryptos.filter(crypto =>
      crypto.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    )

    return (
      <main>
        <Header handleSearch={this.handleSearch} />

        <Route 
          exact path='/' 
          render={() => (
            <Cryptos 
              displayCryptos={filteredCryptos}
              addToWatchlist={this.addToWatchlist}
              removeFromWatchlist={this.removeFromWatchlist}
              isCryptoInWatchlist={this.isCryptoInWatchlist}
            />
          )}
        />

        <Route 
          exact path='/crypto/:id' 
          render={() => (
            <CryptoDetails
              cryptos={this.state.Cryptos}
              addToWatchlist={this.addToWatchlist}
              removeFromWatchlist={this.removeFromWatchlist}
              isCryptoInWatchlist={this.isCryptoInWatchlist}
            />
          )}
        />

        <Route 
          exact path='/watchlist' 
          render={() => (
            <Watchlist
              watchlist={this.state.Watchlist}
              cryptos={this.state.Cryptos}
              removeFromWatchlist={this.removeFromWatchlist}
            />
          )}
        />


      </main>
    )
  }

}

export default App;
