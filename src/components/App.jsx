import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
export class App extends Component {
  state = {
      contacts: [],
      name: ''
    };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
      <ContactForm
      />
    
        <h2>Contacts</h2>
      <Filter
      />
      <ContactList
      />
    </div>
    )
  }
}
