import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import * as apiCalls from '../../apiCalls'
import Cryptos from '../CryptoCards/CryptoCards'
import Header from '../Header/Header'
import CryptoDetails from '../CryptoDetails/CryptoDetails'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Cryptos: []
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

  render() {
    console.log(this.state.Cryptos)
    return (
      <main>
        <Header />

        <Route 
          exact path='/' 
          render={() => (
            <Cryptos 
              displayCryptos={this.state.Cryptos} 
            />
          )}
        />

        <Route 
          exact path='/crypto/:id' 
          render={() => (
            <CryptoDetails
              cryptos={this.state.Cryptos} 
            />
          )}
        />


      </main>
    )
  }

}

export default App;
