import { useSelector, useDispatch } from 'react-redux';
import { getContact, getFilter } from '../../redux/selectors';
import { removeContact } from '../../redux/contactsSlice';

import './ContactList.css';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getContact);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleRemoveContact = contactId => dispatch(removeContact(contactId));

  const filteredContactList = filter
    ? contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ul>
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
    </ul>
  );
};

export default ContactList;
