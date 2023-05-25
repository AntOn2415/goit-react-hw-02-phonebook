import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      <p>{contact.name}: {contact.number}</p>
      <button type='button' onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;