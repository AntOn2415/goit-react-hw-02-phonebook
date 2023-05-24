import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
// import Filter from './Filter';
export class App extends Component {
  state = {
      contacts: [],
      name: ''
    };

handleNameChange = e => {
console.log(e.currentTarget.value);
this.setState({name: e.currentTarget.value});

}

handleAddContact = (e) => {
  e.preventDefault();
  const newContact = {
    id: nanoid(),
    name: this.state.name.trim()
  };
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact],
    name: ''
  }));
};

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
      <ContactForm
      onName={this.state.name}
      onChangeName={this.handleNameChange}
      onSubmit={this.handleAddContact}
      />
    
        <h2>Contacts</h2>
      {/* <Filter
      /> */}
      <ContactList contacts={this.state.contacts} 
      />
    </div>
    )
  }
}
