import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactListItem from './ContactListItem/ContactListItem';
import { useSelector, useDispatch } from 'react-redux';

import { addContact, removeContact } from '../redux/contactsSlice';

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const data = JSON.parse(localStorage.getItem('contacts'));
  //   return data || [];
  // });

  const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const handleAddContacts = (name, number) =>
    dispatch(addContact({ name, number }));
  const handleRemoveContact = contactId => dispatch(removeContact(contactId));

  const filteredContactList = filter
    ? contacts.filter(item => item.name.toLowerCase().includes(filter))
    : contacts;

  return (
    <div className="contact-container">
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} handlePushContact={handleAddContacts} />
      {contacts.length === 0 ? (
        ''
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter
          // handleFilterContact={handleFilterContact}
          />
          <ContactList>
            {filteredContactList.map(({ id, name, number }) => {
              return (
                <ContactListItem
                  key={id}
                  name={name}
                  number={number}
                  handleRemoveContact={() => handleRemoveContact(id)}
                />
              );
            })}
          </ContactList>
        </>
      )}
    </div>
  );
};

export default App;
