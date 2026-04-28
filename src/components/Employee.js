import React, { Component } from 'react'

class Employee extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName : "Muhammed ",
            lastName : "Duzgun",
            email : "muhammed@gmail.com"
        }
    }

    updateEmployee() {
        this.setState({
            firstName : "updated_name",
            lastName : "updated_lastName",
            email : "updated_email"
        })
    }

  render() {
    return (
      <div>
        <h3>{this.state.firstName}</h3>
        <h3>{this.state.lastName}</h3>
        <h3>{this.state.email}</h3>
        <button onClick={() => this.updateEmployee()}>Update fields</button>
      </div>
    )
  }

}

export default Employee
