import './App.css';
import React from 'react'
import * as apiCalls from './apiCalls'
import Cryptos from './Cryptos'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Cryptos: []
    }
  }

  componentDidMount = () => {
    apiCalls.getAllCryptos()
    .then((data) => {
      this.setState({
        Cryptos: data.data
      })
    })
  }

  render() {
    return (
      <main>
        <header>
          <h1>Crypto Center</h1>
        </header>
        <Cryptos
          displayCryptos={this.state.Cryptos}
        />
        <footer>
          <h3>Crypto Center est.2023</h3>
        </footer>
      </main>
    )
  }

}

export default App;
