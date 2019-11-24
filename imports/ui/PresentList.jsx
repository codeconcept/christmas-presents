import React from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import Presents from '../api/presents';
import PresentDetails from './PresentDetails';

class PresentList extends React.Component {
  state = {  }
  render() { 
    const {presents} = this.props
    return (
      <div>
        {presents.map(p => <PresentDetails key={p._id} present={p} /> )}
        
      </div>
    );
  }
}
 
export default PresentListContainer = withTracker(() => {
  return {
    presents: Presents.find().fetch(),
  }
})(PresentList);