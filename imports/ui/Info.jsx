import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';

class Info extends Component {
  render() {
    

    return (
      <div>
        <h2>Info</h2>
        <div>Page d'informations.</div>
      </div>
    );
  }

  
}

export default Info;
