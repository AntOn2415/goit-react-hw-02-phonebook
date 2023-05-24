import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const Contacts = ({ number }) => {
  return (
    <div className={css.contacts}>
    </div>
  );
};

Contacts.propTypes = {
  number: PropTypes.number,
};

export default Contacts;