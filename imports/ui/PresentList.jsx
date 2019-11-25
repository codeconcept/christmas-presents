import React from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import Presents from '../api/presents';
import PresentDetails from './PresentDetails';
import PresentForm from './PresentForm';

class PresentList extends React.Component {
  state = {  }
  render() { 
    const {presents, profile} = this.props
    return (
      <>
        <PresentForm profile={profile} />
        <div>
          {presents.map(p => <PresentDetails key={p._id} present={p} /> )}
          
        </div>
      </>
    );
  }
}
 
export default PresentListContainer = withTracker(() => {
  const profile = Meteor.user() ? Meteor.user() : {};
  return {
    presents: Presents.find().fetch(),
    profile
  }
})(PresentList);