import React from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ name, id }) => {
  return (
    <ul className={css.contactList}>
<ContactItem/>
    </ul>
  );
};

ContactList.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
};

export default ContactList;