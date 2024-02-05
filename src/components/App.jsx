import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactListItem from './ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContact } from '../redux/selectors';

const App = () => {
  const contacts = useSelector(getContact);

  return (
    <div className="contact-container">
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length === 0 ? (
        ''
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList>
            <ContactListItem />
          </ContactList>
        </>
      )}
    </div>
  );
};

export default App;
