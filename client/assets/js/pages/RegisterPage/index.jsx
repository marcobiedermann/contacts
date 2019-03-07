import React, { Component } from 'react';
import Label from '../../components/Label';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <input type="email" name="email" onChange={this.onChange} />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <input type="password" name="password" onChange={this.onChange} />
          </div>

          <div>
            <Label htmlFor="name">Name</Label>
            <input type="text" name="name" onChange={this.onChange} />
          </div>

          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
