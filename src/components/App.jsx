import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
// import Filter from './Filter';
export class App extends Component {
  state = {
      contacts: [],
      name: '',
      number: ''
    };

handleChange = e => {
  const {name, value} = e.currentTarget;
  
this.setState({[name]: value});
}

handleAddContact = (e) => {
  e.preventDefault();
  const newContact = {
    id: nanoid(),
    name: this.state.name.trim(),
    number: this.state.number.trim(),
  };
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact],
    name: '',
    number: '',
  }));
};

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
      <ContactForm
      onName={this.state.name}
      onNumber={this.state.number}
      onChangeContact={this.handleChange}
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
