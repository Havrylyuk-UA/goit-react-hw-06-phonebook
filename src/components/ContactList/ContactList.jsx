import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

import './ContactList.css';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  const handleRemoveContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={phone}
            handleRemoveContact={() => handleRemoveContact(id)}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
