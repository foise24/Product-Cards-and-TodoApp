import React from 'react';
import './App.css';
import Productcard from './components/Product-Card/product-card'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1>Product Page</h1>
      <Productcard/>
    </div>
  )
}
}

export default App;
