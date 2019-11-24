import React from 'react';

import Presents from './../api/presents';

class PresentForm extends React.Component {
  state = {
    present: {
      presentTitle: '',
      presentDescription: '',
      presentPrice: '',
      presentReceiver: '',
      presentCreatedAt: '',
      presentCreatedBy: '',
    },
    error: null
  }
  presentTitleRef = React.createRef();

  componentDidMount() {
    this.presentTitleRef.current.focus();
  }

  handleChange = e => {
    const present = this.state.present;
    present[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ present });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const present = this.state.present;
    present["presentCreatedAt"] = new Date().toISOString();
    this.setState({ present });
    Presents.insert(this.state.present, (err, insertedPresentId) => {
      if (err) {
        this.setState({ error: err})
      } else {
        console.log('insertedPresentId', insertedPresentId);
        this.setState({
          present: {
            presentTitle: '',
            presentDescription: '',
            presentPrice: '',
            presentReceiver: '',
            presentCreatedAt: '',
            presentCreatedBy: '',
          },
          error: null
        });
        this.presentTitleRef.current.focus();
      }
    });
  }
  
  render() { 
    return (
      <div>
        <h3>Tous les cadeaux</h3>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Ajouter une idée cadeau</legend>
            <label htmlFor="presentTitle">Nom du cadeau</label><br/>
            <input
              type="text"
              value={this.state.present.presentTitle}
              onChange={this.handleChange}
              ref={this.presentTitleRef}
              id="presentTitle"
              name="presentTitle" /><br /><br />
            <label htmlFor="presentDescription">Description</label><br/>
            <textarea
              value={this.state.present.presentDescription}
              onChange={this.handleChange}
              id="presentDescription"
              name="presentDescription"></textarea><br /><br />
            <label htmlFor="presentPrice" >Prix</label><br/>
            <input
              value={this.state.present.presentPrice}
              onChange={this.handleChange}
              type="text"
              id="presentPrice"
              name="presentPrice" /><br /><br />
            <label htmlFor="presentReceiver">Destinataire</label><br/>
            <input
              value={this.state.present.presentReceiver}
              onChange={this.handleChange}
              type="text"
              id="presentReceiver"
              name="presentReceiver" /><br /><br />
            <label htmlFor="presentCreatedBy">Idée cadeau ajoutée par</label><br/>
            <input
              value={this.state.present.presentCreatedBy}
              onChange={this.handleChange}
              type="text"
              id="presentCreatedBy"
              name="presentCreatedBy" /><br /><br/>
            <button type="submit">ajouter</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
 
export default PresentForm;