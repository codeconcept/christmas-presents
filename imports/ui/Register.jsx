import React, { createRef } from 'react';
import { Accounts } from "meteor/accounts-base";

class Register extends React.Component {
  state = {
    user: {
      email: '',
      password: ''
    }
  }

  userEmailRef = createRef();

  componentDidMount() {
    this.userEmailRef.current.focus();
  }

  handleChange = e => {
    const user = this.state.user;
    user[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ user });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state.user;
    Accounts.createUser({ email, password }, (error, user) => {
      if (error) {
        console.error(error)
      } else {
        // to make sure the user exists, launch a console in the dev tools and type
        // Meteor.users.find().fetch()
        console.log('user', user);
      }
    });
  }

  render() { 
    const { email, password } = this.state.user;
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Créer un utilisateur</legend>
          <label htmlFor="email">Email</label><br />
          <input value={email} onChange={this.handleChange} ref={this.userEmailRef} type="text" name="email" id="email" placeholder="email" /><br />
          <label htmlFor="password">Mot de passe</label><br />
          <input value={password} onChange={this.handleChange} type="password" name="password" id="password" placeholder="password" /><br/>
          <button>créer</button>
        </fieldset>
      </form>
    );
  }
}
 
export default Register;