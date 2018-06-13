import React, { Component } from 'react';
import './App.css';
import ProductUpload from './ProductUpload.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        YO
        <div className="uploader">
          <ProductUpload />
        </div>
      </div>
    );
  }
}

export default App;
