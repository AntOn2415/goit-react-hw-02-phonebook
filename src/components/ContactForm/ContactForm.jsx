import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ onName, onChangeName, onSubmit,  }) => {

  return (
      <form className={css.contacts} onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={onName}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeName}
        />
        <button type="submit">Add contact</button>
      </form>
  );
};

ContactForm.propTypes = {
  onName: PropTypes.string,
};

export default ContactForm;
