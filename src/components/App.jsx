import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

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
  this.setState(({ contacts }) => ({
    contacts: [newContact, ...contacts],
    name: '',
    number: '',
  }));
};

changeFilter = (e) => {
this.setState({filter: e.currentTarget.value});
};

getFilterContact = () => {
  const {filter, contacts} = this.state;
  const normalizedFilter = filter.toLocaleLowerCase();
  return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
}

  render() {
    const {filter} = this.state;
    const filterContact = this.getFilterContact();
    
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
      <Filter
      value={filter}
      onChangeFilter={this.changeFilter}
      />
      <ContactList contacts={filterContact} 
      />
    </div>
    )
  }
}
