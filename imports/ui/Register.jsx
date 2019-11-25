import React, { createRef } from 'react';
import { Accounts } from "meteor/accounts-base";

class Register extends React.Component {
  state = {
    user: {
      email: '',
      password: ''
    },
    wantToRegister: true,
    error: null
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

  toggleCheckbox = () => {
    this.setState({ wantToRegister: !this.state.wantToRegister });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state.user;
    if (this.state.wantToRegister) {
      Accounts.createUser({ email, password }, (error, user) => {
        if (error) {
          console.error(error);
          this.setState({ error });
        } else {
          // to make sure the user exists, launch a console in the dev tools and type
          // Meteor.users.find().fetch()
          console.log('user', user);
          this.setState({ error: null });
          //redirect to present list page
          this.props.history.replace('/presents');
        }
      });
    } else {
      Meteor.loginWithPassword(email, password, error => {
        if (error) {
          console.log(error);
        } else {
          //redirect to present list page
          this.props.history.replace('/presents');
        }
      });
    }
  }

  render() { 
    const { email, password } = this.state.user;
    const { wantToRegister, error } = this.state;
    return (
      <>
        <br/><br/>
        <label htmlFor="login">J'ai déjà un compte, je souhaite me connecter</label>{" "}
        <input type="checkbox" name="login" id="login" checked={!wantToRegister} value={wantToRegister} onChange={this.toggleCheckbox} /><br/><br/>
        {wantToRegister && (
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Créer un utilisateur</legend>
              <label htmlFor="email">Email</label><br />
              <input value={email} onChange={this.handleChange} ref={this.userEmailRef} type="text" name="email" id="email" placeholder="email" /><br />
              <label htmlFor="password">Mot de passe</label><br />
              <input value={password} onChange={this.handleChange} type="password" name="password" id="password" placeholder="password" /><br/><br/>
              <button>créer</button>
            </fieldset>
          </form>          
        )}

        {!wantToRegister && (
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Se connecter</legend>
              <label htmlFor="email">Email</label><br />
              <input value={email} onChange={this.handleChange} ref={this.userEmailRef} type="text" name="email" id="email" placeholder="email" /><br />
              <label htmlFor="password">Mot de passe</label><br />
              <input value={password} onChange={this.handleChange} type="password" name="password" id="password" placeholder="password" /><br/><br/>
              <button>se connecter</button>
            </fieldset>
          </form>
        )}

        {error && (<pre><code>{JSON.stringify(error, null, 4)}</code></pre>)}
      </>
    );
  }
}
 
export default Register;