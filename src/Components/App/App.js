import './App.css';
import React from 'react'
import * as apiCalls from '../../apiCalls'
import Cryptos from '../Coins/Cryptos'
import Header from '../Header/Header'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Cryptos: []
    }
  }

  componentDidMount = () => {
    this.getData()
    this.interval = setInterval(this.getData, 1000)
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
    return (
      <main>
        <Header />
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
