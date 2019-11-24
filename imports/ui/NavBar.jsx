import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  render() { 
    return (
      <>
        <NavLink to="/">Accueil</NavLink>{" "}
        <NavLink to="/presents">Cadeaux</NavLink>{" "}
        <NavLink to="/info">Info</NavLink>{" "}
        <NavLink to="/register">Inscription</NavLink>{" "}
      </>
    );
  }
}
 
export default NavBar;