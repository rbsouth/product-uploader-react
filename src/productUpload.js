import React, { Component } from 'react';

class ProductUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      takeAll: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  }

  handleSubmit(event) {
    alert('A product was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Take All:
          <input
            name="takeAll"
            type="checkbox"
            checked={this.state.takeAll}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ProductUpload;