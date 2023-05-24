import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  return (
    <li>
      <p>Name: {contact.name}</p>
      <p>Phone: {contact.phone}</p>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;