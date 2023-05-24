import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactItem.module.css'

const ContactItem = ({ contact }) => {
  return (
    <li className={css.contactItem}>
      <p>{contact.name}: {contact.number}</p>
    </li>
  );
};

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default ContactItem;