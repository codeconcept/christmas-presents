import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Browser } from 'react-router-dom'
import App from '/imports/ui/App'

Meteor.startup(() => {
  render(<Browser><App /></Browser>, document.getElementById('react-target'));
});
