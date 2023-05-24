import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactItem.module.css'

const ContactItem = ({ onNewName}) => {
  return (
    <li className={css.contactItem}>
      <p>Name: {onNewName}</p>
      {/* <p>Phone: {contact.phone}</p> */}
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