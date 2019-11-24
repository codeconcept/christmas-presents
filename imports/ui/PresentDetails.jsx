import React from 'react'

class PresentDetails extends React.Component {
  state = {  }
  render() {
    const { present } = this.props;
    return (
      <pre><code>{JSON.stringify(present, null, 4)}</code></pre>
    );
  }
}
 
export default PresentDetails;