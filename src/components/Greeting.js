import React, { Component } from 'react'

class Greeting extends Component {
  render() {
    return (
      <div>
        <h4>Welcome, {this.props.name} - Class component</h4>
      </div>
    )
  }
}

export default Greeting
