import React from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import Presents from '../api/presents';

class PresentList extends React.Component {
  state = {  }
  render() { 
    const {presents} = this.props
    return (
      <div><code><pre>{JSON.stringify(presents)}</pre></code></div>
    );
  }
}
 
export default PresentListContainer = withTracker(() => {
  return {
    presents: Presents.find().fetch(),
  }
})(PresentList);