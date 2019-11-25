import React from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  render() { 
    let email = '';
    if (this.props.profile && this.props.profile.emails && this.props.profile.emails.length) {
      email = this.props.profile.emails[0].address
    } 
    return (
      <>
        <NavLink exact to="/" activeClassName="active">Accueil</NavLink>{"  "}
        <NavLink to="/presents" activeClassName="active">Cadeaux</NavLink>{"  "}
        <NavLink to="/info" activeClassName="active">Info</NavLink>{"  "}
        {
          email ? (<NavLink to="/logout">déconnecter {email}</NavLink>) : (<NavLink to="/register">Inscription / Connection</NavLink>)
        }
      </>
    );
  }
}

export default withTracker((props) => {
  const loggingIn = Meteor.loggingIn();
  const profile = Meteor.user() ? Meteor.user() : {};
  return {
    loggingIn,
    profile
  };
})(NavBar);
