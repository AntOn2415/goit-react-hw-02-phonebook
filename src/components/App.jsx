import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
export class App extends Component {
  state = {
    contacts:[],
    filter: '',
  }

changeFilter = (e) => {
this.setState({filter: e.currentTarget.value});
};

getFilterContact = () => {
  const {filter, contacts} = this.state;
  const normalizedFilter = filter.toLocaleLowerCase();
  return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
}

addContact = (newContact) => {
  const {contacts} = this.state
  const suchNameExists = contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())

  if(suchNameExists){
    alert(`${newContact.name} is already in contacts.`)
    return
  }
  this.setState((prevState) => ({
    contacts: [newContact, ...prevState.contacts],
  }));
};

  render() {
    const {filter} = this.state;
    const filterContact = this.getFilterContact();
    
    return (
      <div>
        <h1>Phonebook</h1>
      <ContactForm
      onAddContact={this.addContact}
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
