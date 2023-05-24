import React from 'react';
import ContactItem from './ContactItem/ContactItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} onNewName={contact.name} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
