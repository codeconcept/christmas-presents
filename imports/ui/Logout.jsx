import React from 'react';
import { Meteor } from 'meteor/meteor';

const Logout = () => {
  handleDisconnect = () => {
    Meteor.logout()
  }
  return (
    <>
      <h3>Déconnexion</h3>
      <div>
        <a href="#" onClick={handleDisconnect}>se déconnecter</a>
      </div>
    </>
  );
}
 
export default Logout;