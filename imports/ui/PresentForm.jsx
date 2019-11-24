import React from 'react';

class PresentForm extends React.Component {
  presentTitleRef = React.createRef();

  componentDidMount() {
    this.presentTitleRef.current.focus();
  }

  handleSubmit = e => {
    e.preventDefault();
    // demo of how to use a ref's value
    // nota: better to NOT use a ref to access the content, we ill use ref only to set focus
    const title = this.presentTitleRef.current.value;
    console.log('title', title);

  }
  
  render() { 
    return (
      <div>
        <h3>Tous les cadeaux</h3>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Ajouter une idée cadeau</legend>
            <label htmlFor="presentTitle">Nom du cadeau</label><br/>
            <input type="text" ref={this.presentTitleRef} id="presentTitle" /><br/><br/>
            <button type="submit">ajouter</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
 
export default PresentForm;