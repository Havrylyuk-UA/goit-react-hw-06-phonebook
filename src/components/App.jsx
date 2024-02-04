import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactListItem from './ContactListItem/ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { setFilterValue } from '../redux/filterSlice';

import { addContact, removeContact } from '../redux/contactsSlice';
import { getContact, getFilter } from '../redux/selectors';

const App = () => {
  const filter = useSelector(getFilter);

  const contacts = useSelector(getContact);

  const dispatch = useDispatch();

  const handleAddContacts = (name, number) =>
    dispatch(addContact({ id: nanoid(10), name, number }));
  const handleRemoveContact = contactId => dispatch(removeContact(contactId));

  const handleFilterContact = ({ target }) =>
    dispatch(setFilterValue(target.value));

  const filteredContactList = filter
    ? contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
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
          <Filter handleFilterContact={handleFilterContact} />
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
